import React, { useState } from "react";
import "./App.css";

function App() {
    const [lon, setLon] = useState("");
    const [lat, setLat] = useState("");
    const [name, setName] = useState("");
    const [temp, setTemp] = useState("");
    const [weather, setWeather] = useState("");
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");
    const [sunrise, setSunrise] = useState("");
    const [sunset, setSunset] = useState("");
    const [isReady, setReady] = useState(false);


    React.useEffect(() => {
            const api = "647d5bdb8ba0a39d895e5c1187af281a";
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=14.6937&lon=-17.4441&appid=${api}&units=metric`)
            .then(result => result.json())
            .then(jsonresult => {
                setName(jsonresult.name);
                setTemp(jsonresult.main.temp);
                setWeather(jsonresult.weather[0].main);
                setDesc(jsonresult.weather[0].description);
                setIcon(jsonresult.weather[0].icon);
                setSunset(jsonresult.sys.sunset);
                setSunrise(jsonresult.sys.sunrise);
                setReady(true);
            })
            .catch(err => console.error(err));
    }, []);

    if (isReady) {
        return (
            <div className="App" class="card">
                <div class="weather">
                    <h1>My Weather App</h1>
                    <p>City: {name}</p>
                    <p>Temperature: {temp} °C</p>
                    <p>Main: {weather}</p>
                    <p>Description: {desc}</p>
                    <p>Illustration:  
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"/>
                    </p>
                    <p>Sunrise: {sunrise}</p>
                    <p>Sunset: {sunset}</p>
                </div>
                <div>
                    <h1>Put Coordinates</h1>
                    <fieldset>
                        <form>
                            <label>Longitude :</label>
                            <input type="text" name="longitude" onChange={e => setLon(e.target.value)} value={lon}/><br/>
                            <label>Latitude :</label>
                            <input type="text" name="latitude" onChange={e => setLat(e.target.value)} value={lat} /><br/>
                        </form>
                    </fieldset>
                </div>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
}

export default App;
