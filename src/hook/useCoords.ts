import React, { useEffect } from "react";

interface UseCoordsState {
  latitude: number | null;
  longitude: number | null;
}

export default function useCoords() {
  const [coords, setCoords] = React.useState<UseCoordsState>({
    latitude: null,
    longitude: null,
  });

  const onSuccess = (coords: GeolocationPosition) => {
    console.log(coords.coords);
    setCoords({
      latitude: coords.coords.latitude,
      longitude: coords.coords.longitude,
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return coords;
}
