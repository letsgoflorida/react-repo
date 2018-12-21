//Import React
import React, { Component } from "react";
import UserService from "../services/UserService";


class Profile extends Component{
  state = {
    userInfo: ""
  }

  componentWillMount(){
    this.getProfile();
  }

  service = new UserService();

  getProfile = () => {
    this.service.getUser()
    .then((user)=>{
      this.setState({
        userInfo: user,
      })
    })
  }
    
  showProfile = () => {
    if(this.state.userInfo.trips){
    let counter = 0
    return this.state.userInfo.trips.map((trip)=>{
      counter++ 
      return(
        <a href={"/trip"} onClick={()=>{this.props.id(trip._id)}}>
          <div className="flexCenteredColumn grow">
            <img src={require(`../images/image${counter}.jpg`)} alt="logo" className="tripsProfilePicture" onClick={(e)=>this.getTripDetail(trip)}/>
            <p>{trip.location}</p>
          </div>
        </a>
      )
    })
  }
  }

  getTripDetail = (trip) => {
  }

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
          {this.showProfile()}
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