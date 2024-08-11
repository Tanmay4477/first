import React from "react";

function Output({weather}) {
    console.log(weather);
    return (
        <>
            <div>
                <h2>{weather.name}</h2>
                <p>{weather.weather[0].main}</p>
                <p>{weather.main.temp}</p>
                </div>
        </>
    )
}

export default Output;