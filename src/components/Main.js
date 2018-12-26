
import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import UserService from "../services/UserService";
import Navbar from './Navbar';
import SignUp from './SignUp';
import LogIn from "./LogIn";
import Profile from "./Profile";
import Create from "./Create"
import {Route, Switch, Link} from "react-router-dom";
import GoogleService from "../services/GoogleService";
import TripDetails from './TripDetails';


class Main extends Component {
	state = {
		loggedUser: false,
		modalSignUp: false, 
		modalLogIn: false, 
		modalProfile: false,
		destinationInfo: false,
		destination: "",
		trip: false
	};

	userService = new UserService();
	googleService = new GoogleService();

	componentDidMount(){
		this.fetchUser()
	}

	tripId = (trip_id) => {
		this.setState({
			trip: trip_id
		})
	}
	deleteState = () => {
		this.setState({
			destinationInfo: false,
			destination: false
		})
	}

	fetchUser(){
		this.userService.loggedin()
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
		this.userService.logout()
		.then(()=>{
			document.getElementById('logedOutMessage').removeAttribute("class", "display-none");
			setTimeout(function(){document.getElementById('logedOutMessage').setAttribute("class", "fadeOut");},3000)
			setTimeout(function(){document.getElementById('logedOutMessage').setAttribute("class", "display-none");},5000);
			this.setState({loggedUser: false});
		})
	}

	submitForm = (destination) => {
		this.googleService.locationInfo(destination)
    .then((destinationInfo)=>{
      this.setState({
				destinationInfo: destinationInfo,
				destination: destination
			})
    })
    .catch((err)=>
      console.log("Sorry something went wrong on submit.", err)
		)
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
					trip={this.tripId}
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
					<Route path="/trip" 
						render={(props)=> <TripDetails {...props} tripId={this.state.trip}/>}/>
					<Route exact path="/" 
						render={(props) => <Home {...props} 
						submitForm={this.submitForm}  
						user={this.state.loggedUser}
						reset={this.deleteState}/>}/>
					<Route exact path="/create" 
						render={(props) => <Create {...props} 
						destinationDetails={this.state.destinationInfo} 
						destination={this.state.destination}
						/>}/>
    	  </Switch>
      </div>
  	)
  }
}

export default Main;

//This component is being imported in 'App.js'