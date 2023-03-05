import React, { useEffect, useState } from "react";

export interface UseCoordsState {
  latitude: number;
  longitude: number;
  error?: null | string;
}

const useCoords = () => {
  const [coords, setCoords] = useState<UseCoordsState>({
    latitude: 37.486289,
    longitude: 126.926644,
    error: null,
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude, error: null });
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
