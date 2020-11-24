import React, { useState } from 'react';
import CityWeather from './CityWeather';
import SearchCity from './SearchCity';

const CityWeathers = () => {
    const [cityWeathers, setCityWeathers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function getCityWeather(city) {
        setLoading(true);
        setError(false);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`)
            .then(res => res.json())
            .then(res => {
                if(res.cod === "404") {
                    setError(true);
                } else {
                    setCityWeathers((prevState) => [...prevState, res])
                }
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }

    function removeCity(key) {
        const newCityWeathers = cityWeathers.filter((cityWeather, index) => {
            if (index !== key) {
                return true
            } else {
                return false
            }
        })

        setCityWeathers(newCityWeathers)
    }

    return (
        <div className="container">
            <h2>Weather</h2>
            <SearchCity handleClick={getCityWeather} />
            {isLoading && (
                <p>Loading..</p>
            )}
            {error && (
                <p>Error! City weather information couldn't fetch. Try again.</p>
            )}
            {!error && !isLoading && cityWeathers.length ? (
                cityWeathers.map((cityWeather, index) => (
                    <CityWeather
                    key={index}
                    id={index}
                    cityName={cityWeather.name}
                    countryName={cityWeather.sys.country}
                    weatherMain={cityWeather.weather[0].main}
                    weatherDescription={cityWeather.weather[0].description}
                    minTemp={cityWeather.main.temp_min}
                    maxTemp={cityWeather.main.temp_max}
                    lat={cityWeather.coord.lat}
                    lon={cityWeather.coord.lon}
                    icon={cityWeather.weather[0].icon}
                    removeCity={removeCity} />
                ))
                
            ) : (
                    <p>Please write the city name!</p>
                )}
        </div>
    );
}

export default CityWeathers;