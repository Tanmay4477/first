import React, {useState} from 'react';
import axios from 'axios';
import Input from './components/input.js';
import Output from './components/output.js';

const API_KEY = "230aae236e20592bf41f237747497e50";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    }
    catch (e) {
      console.log(e, "hudsj");
    }
  }

  const handleCityChange = (cityName) => {
    setCity(cityName);
    if(city) {
      getWeather(city);
    }
  }

  if(weather) {
  return (
    <>
      <Input onCityChange={handleCityChange}/> 
      <Output weather={weather} />
      </>
  );
}
else {
  return (
    <>
      <Input onCityChange={handleCityChange}/> 
      <div>loading...</div>
    </>
  )
}
}

export default App;
