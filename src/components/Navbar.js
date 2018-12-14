//Import React
import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";



class Navbar extends Component {
  render(){
    return(
      <div>
      <nav id="navClass" className="main-navigation">
        <div className="navbar-header animated1 fadeInUp">
          <a className="navbar-brand" href="index.html#aboutUs">goFlo</a>
        </div>
        <ul id="list" className="nav-list">
          <li className="nav-list-item">
            <Link className="nav-link grow" to="/signup">Sign Up For Account</Link>
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
   
      </div>
    )
  }
}


export default Navbar;

//This component is being imported in "Main.js"