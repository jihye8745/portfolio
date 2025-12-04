import React from 'react'
import { Link } from "react-router";

const Nav = () => {
  return (
    <div>
      <h1><Link to="/">LOGO</Link></h1>

      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
    </div>
  )
}

export default Nav
