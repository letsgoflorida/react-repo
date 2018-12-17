//Import React
import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";



class Navbar extends Component {
  render(){
    return(
      <div>
        <nav id="navClass" className="main-navigation">
            <img src={require('../images/Jaime_logo-02.png')} alt="logo" className="logoImage animated1 fadeInUp"/>
          <ul id="list" className="nav-list">
          { this.props.user ? 
            <div>
              <li className="nav-list-item">
                <a className="nav-link grow" onClick={()=>this.props.show("modalProfile")}> {this.props.user.username} <img src={require('../images/userIcon.png')} alt="logo"/></a>
              </li>
              <li className="nav-list-item">
                <a className="nav-link grow" onClick={()=>this.props.logout()}>Log Out</a>
              </li>
            </div>
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