import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';

const WeatherBtn = ({cities, cityClick}) => {
  return (
    <div className='btns'>
      <Button variant="primary" onClick={()=> cityClick("current")}>현재위치</Button>
      {/* <Button variant="primary">tokyo</Button>
      <Button variant="primary">uk</Button> */}
      {cities.map((item, index)=>(
        <Button variant="primary" key={index} onClick={() => cityClick(item)}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherBtn
