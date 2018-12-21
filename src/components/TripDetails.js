import React, { Component } from 'react'


class TripDetails extends Component {
  render(){
    return(
      <div className="flexCenteredWH">
        <div className="detailsContent">
          <h1 id="detailsName">Miami</h1>
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
      </div>
    )
  }
}


export default TripDetails;