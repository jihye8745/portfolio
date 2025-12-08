import React from 'react'
import { Link } from 'react-router'

const Btns = () => {

  const handleClick = (event) => {
    document.querySelectorAll('.btns button').forEach(btn => {
      btn.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
  }


  return (
    <div className='btns'>
      
      <Link to="/profile/home">
      <button type='button' className='homeBtn active' onClick={handleClick}>Home</button>
      </Link>

      <Link to="/profile/about">
      <button type='button'className='aboutBtn' onClick={handleClick}>About</button>
      </Link>

      <Link to="/projectbtns/project">
      <button type='button' className='projectBtn' onClick={handleClick}>Project</button>
      </Link>
      
      <Link to="/profile/contact">
      <button type='button' className='ContactBtn' onClick={handleClick}>Contact</button>
      </Link>
    </div>
  )
}

export default Btns
