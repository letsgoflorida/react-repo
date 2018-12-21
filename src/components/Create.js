//Import React
import React, { Component } from 'react';


class Create extends Component {
  state = {
    destinationInfo: "",
    destination: "",
    loader: true,
    hotels: "",
    restaurants: "",
    activities: ""
  }

  componentWillMount(){
    this.getInfo()
  }

  getInfo = () => {
    setTimeout(()=>{
      if(this.props.destinationDetails){
      this.setState({
        destinationInfo: this.props.destinationDetails,
        destination: this.props.destination,
        loader: false,
        hotels: this.props.destinationDetails.hotels.filter((hotel)=>{
          return hotel
          }),
        restaurants: this.props.destinationDetails.restaurants.filter((restaurant)=>{
          return restaurant
          }),
        activities: this.props.destinationDetails.activities.filter((activity)=>{
          return activity
          }),
      })
    } else {
      this.getInfo()
    }
    }, 200)
  }

  showHotels1 = () => {
    let firstHotelList = this.state.hotels.splice(0, 4)  
      firstHotelList = firstHotelList.map((eachHotel)=>{
        return(
          <div class="col-md-3">
            <a href="#">
              <img src={eachHotel.photos} alt="" class="maxWidth" />
            </a>
          </div>
        )
      })
      return firstHotelList
    }

  showHotels2 = () => {
    let secondHotelList = this.state.hotels.splice(0, 4)
      secondHotelList = secondHotelList.map((eachHotel)=>{
      return(
        <div class="col-md-3">
          <a href="#">
            <img src={eachHotel.photos} alt="" class="maxWidth" />
          </a>
        </div>
      )
    })
    return secondHotelList
  }

  showRestaurants1 = () => {
    let firstRestaurantList = this.state.restaurants.splice(0, 4)  
      firstRestaurantList = firstRestaurantList.map((eachRestaurant)=>{
        return(
          <div class="col-md-3">
            <a href="#">
              <img src={eachRestaurant.photos} alt="" class="maxWidth" />
            </a>
          </div>
        )
      })
      return firstRestaurantList
    }

  showRestaurants2 = () => {
    let secondRestaurantList = this.state.restaurants.splice(0, 4)  
      secondRestaurantList = secondRestaurantList.map((eachRestaurant)=>{
        return(
          <div class="col-md-3">
            <a href="#">
              <img src={eachRestaurant.photos} alt="" class="maxWidth" />
            </a>
          </div>
        )
      })
      return secondRestaurantList
    }
    
  showActivities1 = () => {
    let firstActivityList = this.state.activities.splice(0, 4)  
      firstActivityList = firstActivityList.map((eachActivity)=>{
        return(
          <div class="col-md-3">
            <a href="#">
              <img src={eachActivity.photos} alt="" class="maxWidth" />
            </a>
          </div>
        )
      })
      return firstActivityList
    }

    showActivities2 = () => {
      let secondActivityList = this.state.activities.splice(0, 4)  
        secondActivityList = secondActivityList.map((eachActivity)=>{
          return(
            <div class="col-md-3">
              <a href="#">
                <img src={eachActivity.photos} alt="" class="maxWidth" />
              </a>
            </div>
          )
        })
        return secondActivityList
      }

  render(){
    return(
      <div>
        {this.state.loader ? 
        <div> 
          LOADING
        </div>
        :
      <div>
        <div className="flexCentered cityTitleCreate">
          <h1>{this.props.destination}</h1>
        </div>
        <div className="hotelsInfo">
          <h2 className="createTitles">Hotels</h2>
          <img src={require('../images/hotel.png')} alt="logo" className="restaurantIcon"/>
        </div>
        <div class="container createPictureContainer">
          <div class="row blog">
            <div class="col-md-12">
              <div id="secondCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#secondCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#secondCarousel" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                    {this.showHotels1()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </p>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
                    {this.showHotels2()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                      </a>
                    </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>
                  </div>    
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="hotelsInfo">
          <h2 className="createTitles">Restaurants</h2>
          <img src={require('../images/restaurant.png')} alt="logo" className="restaurantIcon"/>
        </div>
        <div class="container createPictureContainer">
          <div class="row blog">
            <div class="col-md-12">
              <div id="firstBlogCarousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#firstBlogCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#firstBlogCarousel" data-slide-to="1"></li>
                  </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                    {this.showRestaurants1()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </p>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
                    {this.showRestaurants2()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>
                  </div>    
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="hotelsInfo">
            <h2 className="createTitles">Activities</h2>
            <img src={require('../images/bike.png')} alt="logo" className="restaurantIcon"/>
        </div>
        <div class="container createPictureContainer">
            <div class="row blog">
              <div class="col-md-12">
                <div id="thirdCarousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#thirdCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#thirdCarousel" data-slide-to="1"></li>
                  </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                    {this.showActivities1()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </p>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
                    {this.showActivities2()}
                      {/* <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div>
                      <div class="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                        </a>
                      </div> */}
                    </div>
                  </div>    
              </div> 
            </div>
          </div>
        </div>
      </div>
        </div>
        }
      </div>
      
    )
  }
}


export default Create;