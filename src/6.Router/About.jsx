import React from 'react'
import { useNavigate } from "react-router";

const About = () => {

  const navigate = useNavigate();

  const goHome = ()=>{
    navigate('/')
  }

  return (
    <div>
      <h2>About Page</h2>
      <button type='button' onClick={goHome}>Home</button>
    </div>
  )
}

export default About
