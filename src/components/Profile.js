//Import React
import React, { Component } from "react";


class Profile extends Component{
    render(){
        return(
        <div className="profile">
            <img src={require('../images/userIcon.png')} alt="logo" className="userProfilePicture"/>
            <h2>Oscar</h2>
            <p>My Trips</p>
        </div>
          )
    }
}


export default Profile;

//This component is being imported in "Main.js"