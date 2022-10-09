import React, { useEffect } from "react";
import useCoords from "../utils/useCoords";

declare global {
  interface Window {
    kakao: any;
  }
}

const Location = () => {
  const { latitude, longitude } = useCoords();
  console.log(latitude, longitude);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const image = `{{
      src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
      size: {
        width: 64,
        height: 69,
      }, // 마커이미지의 크기입니다
      options: {
        offset: {
          x: 27,
          y: 69,
        },`; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
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
          '<div class="flex items-center justify-center rounded-2xl h-[50px] w-auto p-5"><p>Now here?</p></div>';
        const iwContent = message;
        const iwRemoveable = false;

        const imageSrc = "https://image.nbkorea.com/NBRB_Mobile/event/imc/nbxjeonhwangil/layer01.png", // 마커 이미지 url, 스프라이트 이미지
          imageSize = new kakao.maps.Size(77, 107), // 마커 이미지의 크기
          imgOptions = { offset: new kakao.maps.Point(27, 69) },
          markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions);

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });
        infowindow.open(map, marker);
        circle.setMap(map);

        marker.setMap(map);
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return <div className="mx-auto h-[100vh] w-[100vw]" id="map" />;
};

export default Location;
