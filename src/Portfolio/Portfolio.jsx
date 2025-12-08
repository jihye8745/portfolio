import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main'
import Side from './Side'
import "./style.css"

const Portfolio = () => {
  return (
    <div id='wrap'>
      <header>
        <h1>
          <Link to="/profile/home">
            <img src="/common/logo.png" alt="logo" />
          </Link>
        </h1>
      </header>

      <div className="ms_inner">
        <Routes>
          <Route path="/:subPage/:mainPage" element={<Main />} />
          <Route path="/" element={<Main />} />
        </Routes>
        
        <Side/>
      </div>
      
    </div>
  )
}

export default Portfolio
