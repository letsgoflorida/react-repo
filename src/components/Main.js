//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Home from './Home'
import UserService from "../services/UserService";
import Navbar from './Navbar';
import SignUp from './SignUp';
import LogIn from "./LogIn"
import {Route, Switch, Link} from "react-router-dom";

class Main extends Component {
	state = {
		loggedUser: false,
		modalSignUp: false, 
		modalLogIn: false, 
		modalProfile: false
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
		console.log("_+_+_+_++__+_+",user)
		if(!user.message === "Incorrect username"){
		this.setState({loggedUser: user})
		}
	}

	logout = () =>{
		this.service.logout()
		.then(()=>{
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
				<Navbar 
				show={this.showModal}
				user={this.state.loggedUser}
				logout={this.logout}
				/>  
    	  <SignUp signUp={this.state.modalSignUp} hide={this.hideModal} log={this.logUser}/>
				<LogIn logIn={this.state.modalLogIn} hide={this.hideModal} log={this.logUser}/>
    	  <Switch>
    	    <Route path="/" render={(props) => <Home />}/>
    	  </Switch>
      </div>
  	)
  }
}

export default Main;

//This component is being imported in 'App.js'