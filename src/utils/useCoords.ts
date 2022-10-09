import React, { useEffect } from "react";

interface UseCoordsState {
  latitude: number;
  longitude: number;
}

export default function useCoords() {
  const [coords, setCoords] = React.useState<UseCoordsState>({
    latitude: 0,
    longitude: 0,
  });

  const onSuccess = (coords: GeolocationPosition) => {
    setCoords({
      latitude: coords.coords.latitude,
      longitude: coords.coords.longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  useEffect(() => {
    const myLocation = setInterval(() => {
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(onSuccess);
      }
    }, 3000);
    return () => clearTimeout(myLocation);
  }, []);

  return coords;
}
