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
          { this.props.user ? 
            <li className="nav-list-item">
              <button type="button" className="btn btn-demo inactive grow nav-link" data-toggle="modal" data-target="#myModal2">
              {this.props.user.username} (image) </button>
            </li>
          :
          <div>
            <li className="nav-list-item">
              <a className="nav-link grow" onClick={()=>this.props.show("modalSignUp")}>Sign Up</a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link grow" onClick={()=>this.props.show("modalLogIn")}>Log in</a>
            </li>
          </div>
          }
          </ul>         
        </nav>
      </div>
    )
  }
}


export default Navbar;

//This component is being imported in "Main.js"