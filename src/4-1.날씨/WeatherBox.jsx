import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather:", weather)
  return (
    <div className='wbox'>
      {/* <h3>{weather && weather.name}</h3> */}
      <h3>{weather?.name}</h3>
      {/* 
      옵셔널 체이닝 : 변수?
      >> 객체가 존재하지 않으면(undifined or null) 에러를 발생시키지 않고 undefined 반환
      */}
        <h2>{weather?.main.temp.toFixed(1)} 도</h2>
        <p>습도 : {weather?.main.humidity}</p>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox
