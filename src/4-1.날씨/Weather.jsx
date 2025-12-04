import React, { useEffect, useState } from 'react'
import WeatherBox from './WeatherBox'
import WeatherBtn from './WeatherBtn'
import { ClipLoader } from "react-spinners";

const Weather = () => {

  // 1. 실행되자마자 현재 위치의 날씨 정보 보임
  // 2. 날씨 정보에는 도시이름, 온도, 날씨상태
  // 3. 5개의 버튼(현재위치 4개의 다른 도시)
  // 4. 도시 버튼을 누르면 그 도시의 날씨 보임
  // 5. 현재 위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
  // 6. 데이터를 들고오는 동안 로딩스피너가 돈다

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false);

  const cities = ['tokyo','paris','london']

  const getCurrentLocation = () => {
    // console.log("getCurrentLocation")
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude; //위도
      let lon = position.coords.longitude; //경도
      getWeather(lat,lon);
      // console.log("현재위치:", lat, lon);
    });
  }

  const getWeather = async (lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d22b259039aa389613dff61152b731ae&units=metric&lang=kr`

    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()

    // console.log("data: ",data)
    setWeather(data)
    setLoading(false)
  }

  const getCityWeather = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d22b259039aa389613dff61152b731ae&units=metric&lang=kr`

    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()

    console.log("data:", data)
    setWeather(data)
    setLoading(false)
  }

  const cityClick = (city)=>{
    if(city === "current"){
      getCurrentLocation()
    } else {
      setCity(city)
    }
  }

  useEffect(()=>{
    if(city === ""){
      getCurrentLocation();
    } else {
      getCityWeather();
    }
  },[city])

  // useEffect(()=>{
  //   console.log('city:', city)
  //   getCityWeather()
  // },[city])

  return (
    <div>
      {loading ? (<ClipLoader
        color="rgb(255,0,0)"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />) : (<WeatherBox weather={weather}/>)}
      {/* <WeatherBox weather={weather}/>
       <ClipLoader
        color="rgb(255,0,0)"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <WeatherBtn cities={cities} cityClick={cityClick}/>
    </div>
  )
}

export default Weather
