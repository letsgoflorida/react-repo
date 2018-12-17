//Import React
import React, { Component } from "react";


class Profile extends Component{
    render(){
        return(
        <div className="profile">
            <img src={require('../images/userIcon.png')} alt="logo" className="userProfilePicture"/>
            <h2>Oscar</h2>
            <p>My Trips</p>
            <div className="bubucela">
              <div className="flexCenteredColumn grow">
                <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
                <p>Fort Lauderdale</p>
              </div>
              <div className="flexCenteredColumn grow">
                <img src={require('../images/wpm.jpg')} alt="logo" className="tripsProfilePicture"/>
                <p>W. Palm Beach</p>
              </div>
              <div className="flexCenteredColumn grow">
                <img src={require('../images/jacksonville.jpg')} alt="logo" className="tripsProfilePicture"/>
                <p>Jacksonville</p>
              </div>
            </div>
            <div>
              <button type="button" className="logOutButton btn btn-light">Log Out</button>
            </div>  
        </div>
          )
    }
}


export default Profile;

//This component is being imported in "Main.js"