import React from 'react'
import { Link } from 'react-router'

const Btns = () => {
  return (
    <div className='btns'>
      
      <Link to="/profile/home">
      <button type='button' className='homeBtn active'>Home</button>
      </Link>

      <Link to="/profile/about">
      <button type='button'className='aboutBtn'>About</button>
      </Link>

      <Link to="/projectbtns/project">
      <button type='button' className='projectBtn'>Project</button>
      </Link>
      
      <Link to="/profile/contact">
      <button type='button' className='ContactBtn'>Contact</button>
      </Link>
    </div>
  )
}

export default Btns
