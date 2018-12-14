//Import React
import React, { Component } from "react";
import UserService from "../services/UserService";


class LogIn extends Component {
    state = { username: "", password: "" };
    service = new UserService();
    
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.service.login(this.state.username, this.state.password)
        .then((loggedUser)=>{
						console.log(loggedUser)
            this.setState({usernameInput: "", passwordInput: ""})
            this.props.log(loggedUser)
        })
        .catch((err)=>{
            console.log("Sorry something went wrong on submit.", err)
        })

    }

    render(){
				const showHideClassName = this.props.logIn ? "display-block" : "display-none";
			
        return(
        <div id="login" className={showHideClassName}>
          <h2>Log In</h2>
          <form onSubmit={this.handleFormSubmit}>
            <fieldset>
              <p><label>Username</label></p>
              <p><input type="text" placeholder="username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} /></p>

              <p><label>Password</label></p>
              <p><input type="password" placeholder="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></p>

              <p><input type="submit" value="Log In"/></p>
            </fieldset>
          </form>
        </div>
      )
    }
}

export default LogIn;