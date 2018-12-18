//Import React
import React, { Component } from "react";


class Profile extends Component{
    
  render(){
    const showHideClassName = this.props.profile ? "profile slideLeft" : "display-none"

    return(
    <div className={showHideClassName}>
      <button type="button" className="close profileCloseButton" aria-label="Close"><span aria-hidden="true" onClick={()=>this.props.hide("modalProfile")}>&times;</span></button>
      <div className="userInfo">
        <img src={require('../images/userIcon.png')} alt="logo" className="userProfilePicture"/>
        <h2 className="userText">{this.props.user.username}</h2>
      </div>
      <p className="myTripsText">My Trips</p>
        <div className="bubucela">
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
          <div className="flexCenteredColumn grow">
            <img src={require('../images/fort.jpg')} alt="logo" className="tripsProfilePicture"/>
            <p>Fort Lauderdale</p>
          </div>
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
          <button type="button" className="logOutButton btn btn-light" onClick={()=>{this.props.hide("modalProfile"); this.props.logout()}}>Log Out</button>
        </div>  
      </div>
      )
    }
}


export default Profile;

//This component is being imported in "Main.js"