//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Home from './Home'
import Navbar from './Navbar';
import SignUp from './SignUp';
import {Route, Switch, Link} from "react-router-dom";

class Main extends Component {
    state = {signUp: false};

  showSignUp = () => {
    this.setState({signUp: true});
  };

  hideSignUp = () => {
    this.setState({signUp: false});
  };


    render() {
        return(
            <div>
                <Navbar/>  
                <SignUp/>
                <Switch>
                    <Route path="/" render={(props) => <Home />}/>
                </Switch>
            </div>
        )
    }
}

export default Main;

//This component is being imported in 'App.js'