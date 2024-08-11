import React, {useState} from 'react';
import axios from 'axios';
import Input from './components/input';
import Output from './components/output';

const API_KEY = "230aae236e20592bf41f237747497e50";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const getWeather = async(cityName) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  const handleCityChange = (city) => {
    setCity(city);
    if(city) {
      getWeather(city);
    }
  }

  


  return (
    <>
      <Input onCityChange={handleCityChange}/>
      {weather} && <Output weather={weather} />
      </>
  );
}

export default App;
