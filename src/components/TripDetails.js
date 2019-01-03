import React, { Component } from 'react'
import TripService from "../services/TripService";


class TripDetails extends Component {
  state = {
    trip: false
  }

  tripService = new TripService()

  componentDidMount() {
    let tripId = this.props.location.pathname.split("/")
    console.log(tripId)
    this.tripService.tripInfo(tripId[2])
    .then((trip2)=>{
      this.setState({
        trip: trip2
      })
    })
    .catch((err)=>{
    })
  }

  showFinalBudget = () => {
    if(this.state.trip.details) {
    let finalBudget = this.state.trip.details.reduce((x, y) => {
      return x + Number(y.price)
    }, 0)
    return (
      <span>
        {finalBudget}
      </span>
    )
    }
  }

  render(){
    return(
      <div className="flexCenteredWH tripDetailsBackground">
        <div className="detailsContent">
          <div className="flexEvenly">
            <h1 id="detailsName">{this.state.trip.location}</h1>
            <p id="finalBudgetText"><img src={require("../images/money_icon_322468.png")} alt="money" className="" />${this.showFinalBudget()}</p>
          </div>
            <div className="satan">
              <div class="col-md-3">
                <img src={require("../images/image3.jpg")} alt="hola" className="maxWidth" />
                <div id="infoAboutEachHotel">
                  <p className="hotelName">- Hotel Bubucela</p>
                  <p>- $250 per night</p>
                  <div className="flexCenteredStar">
                    <p>- 4.5</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <img src={require("../images/image1.jpg")} alt="hola" className="maxWidth" />
                <div id="infoAboutEachHotel">
                  <p className="hotelName">- Hotel Bubucela</p>
                  <p>- $250 per night</p>
                  <div className="flexCenteredStar">
                    <p>- 4.5</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <img src={require("../images/image2.jpg")} alt="hola" className="maxWidth" />
                <div id="infoAboutEachHotel">
                  <p className="hotelName">- Hotel Bubucela</p>
                  <p>- $250 per night</p>
                  <div className="flexCenteredStar">
                    <p>- 4.5</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
        <button type="button" className="absolute btn btn-danger">Delete Trip</button>
      </div>
    )
  }
}


export default TripDetails;