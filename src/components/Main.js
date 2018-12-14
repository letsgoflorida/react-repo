//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Home from './Home'
import Navbar from './Navbar';
import SignUp from './SignUp';
import LogIn from "./LogIn"
import {Route, Switch, Link} from "react-router-dom";

class Main extends Component {
    state = {
			modalSignUp: false, 
			modalLogIn: false, 
			modalProfile: false
		};

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
								hide={this.hideModal}
								/>  
                <SignUp signUp={this.state.modalSignUp}/>
								<LogIn logIn={this.state.modalLogIn}/>
                <Switch>
                  <Route path="/" render={(props) => <Home />}/>
                </Switch>
            </div>
        )
    }
}

export default Main;

//This component is being imported in 'App.js'