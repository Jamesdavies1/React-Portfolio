import React from "react";
import {Link} from "react-router-dom";

function Navigation () {
    return (
      <ul className="nav justify-content-center">
        <Link to='/projects'>
      <li className="nav-item">
          <a className="nav-link active">Projects</a>
      </li>
      </Link>
      <Link to='/'>
      <li className="nav-item">
          <a className="nav-link">Home</a>
      </li>
      </Link>
      <Link to='/blog'>
      <li className="nav-item">
          <a className="nav-link">Blog</a>
      </li>
      </Link>
      <Link to='/contact'>
      <li className="nav-item">
          <a className="nav-link">Contact</a>
      </li>
      </Link>
  </ul>
    )
}

export default Navigation;