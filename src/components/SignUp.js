//Import React
import React, { Component } from "react";
import Axios from 'axios';
import UserService from "../services/UserServices";


class SignUp extends Component {
    state = { username: "", email: "", password: "" };
    userService = new UserService();
    
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        // you could just do axios.post('http://localhost:5000/api/signup, {username: this.state.userNameInput, password: this.state.passWordInput}, {withCredentials: true})
        this.userService.login(this.state.username, this.state.email, this.state.password)
        .then((userFromDB)=>{
            // here we wait for the API to give us the user object back after logging in
            this.setState({usernameInput: '', emailInput: "", passwordInput: ''})
            // then we pass that user object back to app component
            // this.props.logTheUserIntoAppComponent(userFromDB)
            // here, we are getting the user object from the DB
            // and we're setting AppComponent.state.loggedinuser equal to it
            // this.props.history.push('/project-index');
            // then we redirect
        })
        .catch((err)=>{
            console.log("Sorry something went wrong on submit.", err)

        })

    }

    render(){
        return(
        <div id="login">

            <h2>Sign In</h2>

            <form onSubmit={this.handleFormSubmit}>

                <fieldset>

                 <p><label for="username">Username</label></p>
                    <p><input type="text" id="username" placeholder="username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} /></p>

                    <p><label for="email">E-mail address</label></p>
                    <p><input type="email" id="email" placeholder="mail@address.com" name="email" value={this.state.email} onChange={e => this.handleChange(e)}/></p>

                    <p><label for="password">Password</label></p>
                    <p><input type="password" id="password" placeholder="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></p>

                    <p><input type="submit" value="Sign In"/></p>

                </fieldset>

            </form>

        </div>
        )
    }
}

export default SignUp;

//This is being imported in "Main.js"