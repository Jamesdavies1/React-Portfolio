import React from "react";

function Navigation () {
    return (
      <ul className="nav justify-content-center">
      <li className="nav-item">
          <a className="nav-link active" href="./projects.html">Projects</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="./index.html">Home</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="./blog.html">Blog</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="./contact.html">Contact</a>
      </li>
  </ul>
    )
}

export default Navigation;