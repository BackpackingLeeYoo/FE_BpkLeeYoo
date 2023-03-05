import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import IconButton from "../elements/IconButton";
import { stampList } from "../model/stamp-list";
import useCoords, { UseCoordsState } from "../utils/useCoords";

interface IStampList {
  stampName: string;
  latitude: number;
  longitude: number;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const Location = () => {
  const navigators = useNavigate();
  const { latitude, longitude, error } = useCoords();
  const [isTouched, setIsTouched] = useState(false);
  const [level, setLevel] = useState<number>(3);

  const handleTouchStart = (e: SyntheticEvent) => {
    console.log("touched", e);
    setIsTouched(true);
  };

  const startGeoLocation = () => {
    setIsTouched(false);
  };

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const image = `{{
      src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
      size: {
        width: 63,
        height: 68,
      },
      options: {
        offset: {
          x: 27,
          y: 69,
        },`;

    const onLoadKakaoMap = () => {
      if (isTouched || !latitude || !longitude || error) return;

      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: level,
        };

        const map = new window.kakao.maps.Map(container, options);

        kakao.maps.event.addListener(map, "zoom_changed", function () {
          setLevel(map.getLevel());
        });

        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);

        const circle = new kakao.maps.Circle({
          center: markerPosition, // 원의 중심좌표 입니다
          radius: 200, // 미터 단위의 원의 반지름입니다
          strokeWeight: 5, // 선의 두께입니다
          strokeColor: "#182C4D", // 선의 색깔입니다
          strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "dashed", // 선의 스타일 입니다
          fillColor: "#182C4D", // 채우기 색깔입니다
          fillOpacity: 0.5, // 채우기 불투명도 입니다
        });

        const message =
          '<div class="flex items-center justify-center pl-30 rounded-[20px] h-50 w-auto p-5 font-black"><p>Now here?</p></div>';
        const iwContent = message;
        const iwRemoveable = true;

        const imageSrc = "https://image.nbkorea.com/NBRB_Mobile/event/imc/nbxjeonhwangil/layer01.png", // 마커 이미지 url, 스프라이트 이미지
          imageSize = new kakao.maps.Size(77, 107), // 마커 이미지의 크기
          imgOptions = { offset: new kakao.maps.Point(27, 69) },
          markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
          zIndex: 100,
        });

        circle.setMap(map);
        marker.setMap(map);

        const MarkerListImageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        const MarkerListImageSize = new kakao.maps.Size(24, 35);
        const markerListImage = new kakao.maps.MarkerImage(MarkerListImageSrc, MarkerListImageSize);

        stampList.forEach((place: IStampList) => {
          const markerList = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
            image: markerListImage,
            title: place.stampName,
          });

          const contentStr = `<div class="flex items-center justify-center rounded-[10px] h-30 min-w-60 mb-40 p-10 font-black bg-white">${place.stampName}</div>`;

          const customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
            content: contentStr,
            yAnchor: 1,
          });
        });

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude, isTouched]);

  if (error) {
    window.location.reload();
  }

  if (!latitude || !longitude) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto h-[100vh] w-[100vw]" id="map" onTouchStart={handleTouchStart}>
        <nav className="fixed top-0 z-10 flex h-50 w-full items-center px-15">
          <IconButton color="black" size="40" backIcon _onClick={() => navigators("/")} />
        </nav>
      </div>
      <button className="fixed bottom-0 z-10 h-40 w-100 bg-[#FFF]" onClick={startGeoLocation}>
        현재위치찾기
      </button>
    </>
  );
};

export default Location;
