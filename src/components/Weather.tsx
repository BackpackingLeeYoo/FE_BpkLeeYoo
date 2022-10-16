import axios from "axios";
import React from "react";
import { instance } from "../utils/axios";
import useCoords from "../utils/useCoords";

const Weather = () => {
  const { latitude, longitude } = useCoords();

  React.useEffect(() => {
    console.log("날씨 불러오기");
    console.log(latitude, longitude);
    const getWeather = async () => {
      try {
        const data = await axios.get(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getWeather();
  }, []);

  return <div></div>;
};

export default Weather;
