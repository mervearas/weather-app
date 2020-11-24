import React from 'react';
import CityWeathers from './CityWeathers';

function App() {
  console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);
  return (
    <CityWeathers/>
  )
}

export default App;
