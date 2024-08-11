import React from "react";

const Output = ({weather}) => {
    return (
        <div>
            <h2>{weather.name}</h2>
            <p>{weather.main.temp}</p>
            <p>{weather.weather[0].description}</p>
        </div>
    )
}

export default Output;