import React, {useState} from "react";
import axios from 'axios';
import Input from "./components/input";
import Output from "./components/output";
const API_KEY = "230aae236e20592bf41f237747497e50";

const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const getWeather = async({city}) => {
        try {
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
              setWeather(response.data);
              console.log("svknv");
        } catch (e) {
            console.log(e);
        }
    };

    const handleSubmit = ({cityName}) => {
        setCity(cityName);
        if(cityName) {
            getWeather(city);
        }
    }

    if(weather) {
        return (
            <>
                <Input onChangeHandler={handleSubmit} />
                <Output weather={weather}/>
            </>
        )} 
    else {
        return (
            <>
                <Input onChangeHandler={handleSubmit} />
                <div>loading...</div>
            </>
        )}}

export default App;