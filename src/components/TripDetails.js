import React, { Component } from 'react'


class TripDetails extends Component {
  render(){
    return(
      <div className="flexCenteredWH">
        <div className="detailsContent">
          <div className="flexEvenly">
            <h1 id="detailsName">Miami</h1>
            <p id="finalBudgetText">Final Budget: 145$</p>
          </div>
            <div className="satan">
              <div class="col-md-3">
                <img src={require("../images/bike.png")} alt="hola" className="maxWidth" />
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
                <img src={require("../images/bike.png")} alt="hola" className="maxWidth" />
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
                <img src={require("../images/bike.png")} alt="hola" className="maxWidth" />
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
        <button type="button" className="absolute btn btn-danger">Danger</button>
      </div>
    )
  }
}


export default TripDetails;