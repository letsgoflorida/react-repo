//Import React
import React, { Component } from "react";
import {Route, Switch, Link} from "react-router-dom";



class Navbar extends Component {
  render(){
    return(
      <div>
        <nav id="navClass" className="main-navigation">
           <Link to="/"><img src={require('../images/Jaime_logo-02.png')} alt="logo" className="logoImage animated1 fadeInUp"/></Link>
          <ul id="list" className="nav-list">
            <div id="logedOutMessage" className="display-none">
              <div className="slideDown alert alert-danger" role="alert">
                 Logged Out Succesfully
              </div>
            </div>
            <div id="loggedInMessage" className="display-none">
              <div id="loggedInMessageInside" className="slideDown alert alert-success" role="alert">
                Logged In Succesfully
              </div>
            </div>
          
          { this.props.user ? 
            <div>
              <li className="nav-list-item" id="profileInfo">
                <a className="nav-link grow flexCentered" onClick={()=>this.props.show("modalProfile")}><img className="profileImage" src={require('../images/userIcon.png')} alt="logo"/> {this.props.user.username} </a>
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