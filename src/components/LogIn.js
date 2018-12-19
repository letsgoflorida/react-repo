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
        .then((loginUser)=>{
            this.setState({usernameInput: "", passwordInput: ""})
            this.props.log(loginUser)
        })
        .catch((err)=>{
            console.log("Sorry something went wrong on submit.", err)
        })
    }

    stopModal = (e) => {
			e.stopPropagation();
		}

    render(){
        const showHideClassName = this.props.logIn ? "slideUp" : "display-none";
        const showHideModalBackground = this.props.logIn ? "display-block" : "display-none"
			
        return(
          <div className={showHideModalBackground} onClick={()=>this.props.hide("modalLogIn")}>
              {/* El id de aqui ya lo he cambiado a 'clase', esto es para otra cosa (linea de abajo) */}
            <div onClick={(e)=>this.stopModal(e)} id="login" className={showHideClassName + " login"}>
              <h2>Log In <button type="button" className="close" aria-label="Close"><span className="whiteColor" aria-hidden="true" onClick={()=>this.props.hide("modalLogIn")}>&times;</span></button></h2>
              <form onSubmit={this.handleFormSubmit}>
                <fieldset>
                        <p id="usernameLabel"><label>Username</label><p id="wrongUsernameMessage" className="display-none"><div className="alert alert-danger noMargin" role="alert">Wrong Username</div></p>
                        </p>        
                  <p><input required type="text" placeholder="username" name="username" value={this.state.username} onChange={e => this.handleChange(e)} /></p>

                  <p id="passwordLabel" ><label>Password</label><p id="wrongPasswordMessage" className="display-none"><div className="alert alert-danger noMargin" role="alert">Wrong Password</div></p></p>

                  <p><input required type="password" placeholder="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/></p>

                  <p className="padding10-0"><input className="buttonWidth" type="submit" value="Log In"/></p>
                </fieldset>
              </form>
            </div>
          </div>
      )
    }
}

export default LogIn;