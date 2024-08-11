import React from "react";

function Output({weather}) {
    return (
        <>
        <h2>{weather.name}</h2>
        <p>{weather.main.temp}degree C</p>
        <p>{weather.weather[0].description}</p>
        </>
    )
}

export default Output;