//Import React
import React, { Component } from "react";
import UserService from "../services/UserService";


class SignUp extends Component {
    state = { username: "", email: "", password: "" };
    service = new UserService();
    
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmit = (e) =>{
      e.preventDefault();
      this.service.signup(this.state.username, this.state.email,  this.state.password)
      .then((newUser)=>{
				console.log(newUser)
        this.setState({usernameInput: "", emailInput: "", passwordInput: ""})
        this.props.log(newUser)
      })
      .catch((err)=>{
        console.log("Sorry something went wrong on submit.", err)
      })
		}
		
		stopModal = (e) => {
			e.stopPropagation();
		}
		
    render(){
        const showHideClassName = this.props.signUp ? "slideUp" : "display-none";
        const showHideModalBackground = this.props.signUp ? "display-block" : "display-none";
			
        return(
        <div className={showHideModalBackground} onClick={(e)=>this.props.hide("modalSignUp")}>
          <div onClick={(e)=>this.stopModal(e)} className={showHideClassName + " login"}>
            <h2>
              Sign Up <button type="button" className="close" onClick={()=>this.props.hide("modalSignUp")} aria-label="Close"><span className="whiteColor" aria-hidden="true">&times;</span></button>
            </h2>
            <form onSubmit={this.handleFormSubmit}>
              <fieldset>
                <p><label>Username</label></p>
                <p><input type="text" id="username" placeholder="username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} /></p>

                <p><label>E-mail address</label></p>
                <p><input type="email" id="email" placeholder="mail@address.com" name="email" value={this.state.email} onChange={e => this.handleChange(e)}/></p>

                <p><label>Password</label></p>
                <p><input type="password" placeholder="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></p>

                <p><input type="submit" value="Sign In" /></p>
              </fieldset>
            </form>
          </div>
        </div>
      )
    }
}

export default SignUp;

//This is being imported in "Main.js"