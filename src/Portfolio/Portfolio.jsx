import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main'
import Side from './Side'

const Portfolio = () => {
  return (
    <div className='wrap'>
      <header>
        <h1>
          <Link to="/profile/home">
            <img src="/common/logo.png" alt="logo" />
          </Link>
        </h1>
      </header>

      <Routes>
          <Route path="/:subPage/:mainPage" element={<Main />} />
          <Route path="/" element={<Main />} />
        </Routes>
        
      <Side/>
    </div>
  )
}

export default Portfolio
