//Import React
import React, { Component } from "react";


class Navbar extends Component {
  render(){
    return(
      <nav id="navClass" className="main-navigation">
        <div className="navbar-header animated1 fadeInUp">
          <a className="navbar-brand" href="index.html#aboutUs">goFlo</a>
        </div>
        <ul id="list" className="nav-list">
          <li className="nav-list-item">
            <a href="index.html#aboutUs" className="nav-link grow">Sign Up</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-link grow">Log in</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-link">Welcome Oscar</a>
          </li>
          <li className="nav-list-item">
            <button type="button" className="btn btn-demo inactive grow nav-link" data-toggle="modal" data-target="#myModal2">
              Oscar (image)
            </button>
          </li>
        </ul>         
      </nav>
      
    )
  }
}


export default Navbar;

//This component is being imported in "Main.js"