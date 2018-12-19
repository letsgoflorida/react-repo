//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Home from './Home'
import UserService from "../services/UserService";
import Navbar from './Navbar';
import SignUp from './SignUp';
import LogIn from "./LogIn";
import Profile from "./Profile";
import Create from "./Create"
import {Route, Switch, Link} from "react-router-dom";
const axios = require("axios")

class Main extends Component {
	state = {
		loggedUser: false,
		modalSignUp: false, 
		modalLogIn: false, 
		modalProfile: false,
		destinationInfo: {}
	};

	service = new UserService()

	componentDidMount(){
		this.fetchUser()
	}

	fetchUser(){
		this.service.loggedin()
		.then(loggedUser =>{
      this.setState({
        loggedUser: loggedUser
      }) 
    })
    .catch( err =>{
			console.log(err)
      this.setState({
        loggedUser:  false
      }) 
    })
	}
		
	logUser = (user) => {
		this.fetchUser()
		console.log(user)
		if(user.message === "Incorrect username"){
			document.getElementById('wrongUsernameMessage').removeAttribute("class", "display-none");
			setTimeout(function(){document.getElementById('wrongUsernameMessage').setAttribute("class", "fadeOut");},2000);
			setTimeout(function(){document.getElementById('wrongUsernameMessage').setAttribute("class", "display-none");},3000);
		} else if(user.message === "Incorrect password"){
			document.getElementById('wrongPasswordMessage').removeAttribute("class", "display-none");
			setTimeout(function(){document.getElementById('wrongPasswordMessage').setAttribute("class", "fadeOut");},2000);
			setTimeout(function(){document.getElementById('wrongPasswordMessage').setAttribute("class", "display-none");},3000);
		} else{
			document.getElementById('loggedInMessage').removeAttribute("class", "display-none");
			setTimeout(function(){document.getElementById('loggedInMessage').setAttribute("class", "fadeOut");},3000);
			setTimeout(function(){document.getElementById('loggedInMessage').setAttribute("class", "display-none");},4000);
		this.setState({
			loggedUser: user,
			modalSignUp: false, 
			modalLogIn: false 
		})
		}
	}

	logout = () =>{
		this.service.logout()
		.then(()=>{
			document.getElementById('logedOutMessage').removeAttribute("class", "display-none");
			setTimeout(function(){document.getElementById('logedOutMessage').setAttribute("class", "fadeOut");},3000)
			setTimeout(function(){document.getElementById('logedOutMessage').setAttribute("class", "display-none");},5000);
			this.setState({loggedUser: false});
		})
	}

  showModal = (modal) => {
		console.log(modal)
		console.log("THIS IS TRUE")
    this.setState({
			[modal]: true
		})
  };

  hideModal = (modal) => {
		console.log("THIS IS FALSE")
    this.setState({
			[modal]: false
		})
  };

  render() {
    return(
      <div>
				<Profile 
					profile={this.state.modalProfile} 
					user={this.state.loggedUser} 
					hide={this.hideModal} 
					logout={this.logout}
				/>
				<Navbar 
					show={this.showModal}
					user={this.state.loggedUser}
					logout={this.logout}
				/>  
    	  <SignUp signUp={this.state.modalSignUp} hide={this.hideModal} log={this.logUser}/>
				<LogIn logIn={this.state.modalLogIn} hide={this.hideModal} log={this.logUser}/>
    	  <Switch>
    	    <Route path="/" render={(props) => <Home />}/>
					{/* <Route path="/" render={(props) => <Create />}/> */}
    	  </Switch>
      </div>
  	)
  }
}

export default Main;

//This component is being imported in 'App.js'