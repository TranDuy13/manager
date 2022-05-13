import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { alertClasses } from "@mui/material";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

function Weather () {
        const [WeatherToDay, setWeather] = useState({
            temperature: "",
            wind:"",
            humidity:"",
            cloud: ""
          });
        const {temperature, wind,cloud, humidity} = WeatherToDay
    
        const getWeather = async(e)=>{
            e.preventDefault(); 
            const city= "Ho Chi Minh"
            const country="Viet Nam"
                    const weather_api= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
                    const response= await weather_api.data;
                    if(city && country){
                        setWeather({
                            temperature: response.main.temp-273,
                            wind: response.wind.speed,
                            humidity: response.main.humidity,
                            cloud: response.weather[0].description
                        })
                    }
                }
    return(
        <>
            <form onSubmit={getWeather}>
                <div>{cloud}</div>
                <div>{wind}</div>
                <div>{humidity}</div>
                <div>{temperature}</div>
                <button>Hic</button>
            </form>
            </>
    )  
}

export default Weather;