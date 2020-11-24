import React from 'react'

export default function CityWeather(props) {
    const {
        cityName,
        countryName,
        weatherMain,
        weatherDescription,
        minTemp,
        maxTemp,
        lon,
        lat,
        removeCity,
        id,
        icon
    } = props;
    return (
        <div className="cityWeather">
            <h2>{cityName} , {countryName}</h2>
            <img width={80} src={"http://openweathermap.org/img/w/" + icon + ".png"}/>
            <h3>{weatherMain} <br /><span style={{ fontSize: "0.8rem" }}>{weatherDescription}</span></h3>
            <h5>min temp: {minTemp}</h5>
            <h5>max temp: {maxTemp}</h5>
            <h5>location: {lon}, {lat}</h5>
            <button onClick={() => removeCity(id)}>X</button>
        </div>
    )
};

