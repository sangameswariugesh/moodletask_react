import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './weather.css'

const api = {
  key: "5aa3f959dccd9ed0cde889cb7dfb4a97",
  base: "https://api.openweathermap.org/data/2.5/",
};

 export function Climate() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [pressed, setPressed] = useState()
  useEffect(()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {setWeather(result) });
  
},[pressed])
const click = () => {
  setPressed(weather);}
  return (
    <div  class="bg-weather">
      <header>
      <h1 className="text-center">To See Weather</h1>
        <div className="p-5">
       
        <div className="text-center">
          <input type="text" 
          placeholder="Enter city/town..." 
          onChange={(event) => setSearch(event.target.value)} 
          className="p-2"/>
          <button onClick={click} className="p-2">Search</button>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="text-center">
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
        </div>
      </header>
    </div>
  );
}