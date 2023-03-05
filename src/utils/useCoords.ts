import React, { useEffect, useState } from "react";

export interface UseCoordsState {
  latitude: null | number;
  longitude: null | number;
  error?: null | string;
}

const useCoords = () => {
  const [coords, setCoords] = useState<UseCoordsState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("현재 위치 coords", latitude, longitude);
        setCoords({
          latitude: longitude ? latitude : 37.486289,
          longitude: longitude ? longitude : 126.926644,
          error: null,
        });
      },
      (error) => {
        setCoords((prevState) => ({
          ...prevState,
          error: error.message,
        }));
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return coords;
};

export default useCoords;
