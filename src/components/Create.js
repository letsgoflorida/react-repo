//Import React
import React, { Component } from 'react';


class Create extends Component {
  state = {
    destinationInfo: "",
    destination: "",
    loader: true,
    hotels: "",
    restaurants: "",
    activities: "",
    tripHotel: {},
    tripRestaurants: [],
    tripActivities: [],
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
  showLoader = () => {
    return(
      <div className="flexCenteredColumnWH">
            <div id="loadingImage">
              <div class="cord leftMove">
                <div class="ball"></div>
              </div>
              <div class="cord">
                <div class="ball"></div>
              </div>
              <div class="cord">
                <div class="ball"></div>
              </div>
              <div class="cord">
                <div class="ball"></div>
              </div>
              <div class="cord">
                <div class="ball"></div>
              </div>
              <div class="cord">
                <div class="ball"></div>
              </div>
              <div class="cord rightMove">
                <div class="ball" id="first"></div>
              </div>
              <div class="shadowsWaitAnimation">
                <div class="leftShadow"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div class="rightShadow"></div>
              </div>
            </div>
            <div className="loadingMessage">Loading...</div>
          </div>
    )
  }

  chosenHotel = (e, hotel) => {
      this.setState({
        tripHotel: {
          Name: hotel.name, 
          Photo: hotel.photos,
          Price: hotel.price_level,
          Rating: hotel.rating
        }
      })
    }

  chosenRestaurant = (e, restaurant) => {
    let restaurantList = this.state.tripRestaurants;
    let counter = 0;
    restaurantList.forEach((restaurantToCheck)=>{
      if(restaurantToCheck.name === restaurant.name){
        counter++
      }
    })
    if(counter < 1){
    let currentRestaurant = {
        name: restaurant.name, 
        photo: restaurant.photos,
        price: restaurant.price_level,
        rating: restaurant.rating
    }
    restaurantList.push(currentRestaurant)
    this.setState({
      tripRestaurants: restaurantList
    })
    } else {
     restaurantList = restaurantList.filter((restaurantToCheck)=>{
        if(restaurantToCheck.name === restaurant.name) {
          return false
        } return true
     })
     this.setState({
      tripRestaurants: restaurantList
    })
    }
  }

  chosenActivity = (e, activity) => {
    let activityList = this.state.tripActivities;
    let counter = 0;
    activityList.forEach((activityToCheck)=>{
      if(activityToCheck.name === activity.name){
        counter++
      }
    })
    if(counter < 1){
    let currentActivity = {
        name: activity.name, 
        photo: activity.photos,
        price: activity.price_level,
        rating: activity.rating
    }
    activityList.push(currentActivity)
    this.setState({
      tripActivities: activityList
    })
    } else {
     activityList = activityList.filter((activityToCheck)=>{
        if(activityToCheck.name === activity.name) {
          return false
        } return true
     })
     this.setState({
      tripActivities: activityList
    })
    }
  }

  showHotels1 = () => {
    let firstHotelList = this.state.hotels.slice(0, 4)  
      firstHotelList = firstHotelList.map((eachHotel)=>{
        if(!eachHotel.price_level){
          eachHotel.price_level = Math.floor(Math.random() * ((220 - 160) + 1) + 160)
        }
        return(
          <div class="col-md-3">
            <div onClick={(e)=>this.chosenHotel(e, eachHotel)}>
              <img src={eachHotel.photos} alt="" class="maxWidth" />
              <div id="infoAboutEachHotel">
                <p className="hotelName">- {eachHotel.name}</p>
                  <p>- ${eachHotel.price_level} per night</p>
                  <div className="flexCenteredStar">
                    <p>- {eachHotel.rating}</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
              </div>
            </div>
          </div>
        )
      })
      return firstHotelList
    }

  showHotels2 = () => {
    let secondHotelList = this.state.hotels.slice(4, 8)
      secondHotelList = secondHotelList.map((eachHotel)=>{
        if(!eachHotel.price_level){
          eachHotel.price_level = Math.floor(Math.random() * ((220 - 160) + 1) + 160)
        }
        return(
          <div class="col-md-3">
            <div onClick={(e)=>this.chosenHotel(e, eachHotel)}>
              <img src={eachHotel.photos} alt="" class="maxWidth" />
              <div id="infoAboutEachHotel">
                <p className="hotelName">- {eachHotel.name}</p>
                  <p>- ${eachHotel.price_level} per night</p>
                  <div className="flexCenteredStar">
                    <p>- {eachHotel.rating}</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
              </div>
            </div>
          </div>
        )
    })
    return secondHotelList
  }

  showRestaurants1 = () => {
    let firstRestaurantList = this.state.restaurants.slice(0, 4)  
      firstRestaurantList = firstRestaurantList.map((eachRestaurant)=>{
        if(!eachRestaurant.price_level) {
          eachRestaurant.price_level = Math.floor(Math.random() * ((50 - 25) + 1) + 25)
        } else if (eachRestaurant.price_level <= 4){
          eachRestaurant.price_level = eachRestaurant.price_level * Math.floor(Math.random() * ((25 - 15) + 1) + 15)
        }
        return(
          <div class="col-md-3">
            <div onClick={(e)=>this.chosenRestaurant(e, eachRestaurant)}>
              <img src={eachRestaurant.photos} alt="" class="maxWidth" />
              <div id="infoAboutEachHotel">
                <p className="hotelName">- {eachRestaurant.name}</p>
                  <p>- ${eachRestaurant.price_level} per person</p>
                  <div className="flexCenteredStar">
                    <p>- {eachRestaurant.rating}</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
              </div>
            </div>
          </div>
        )
      })
      return firstRestaurantList
    }

  showRestaurants2 = () => {
    let secondRestaurantList = this.state.restaurants.slice(4, 8)  
      secondRestaurantList = secondRestaurantList.map((eachRestaurant)=>{
        if(!eachRestaurant.price_level) {
          eachRestaurant.price_level = Math.floor(Math.random() * ((50 - 25) + 1) + 25)
        } else if (eachRestaurant.price_level <= 4){
          eachRestaurant.price_level = eachRestaurant.price_level * Math.floor(Math.random() * ((25 - 15) + 1) + 15)
        }
        return(
          <div class="col-md-3">
            <div onClick={(e)=>this.chosenRestaurant(e, eachRestaurant)}>
              <img src={eachRestaurant.photos} alt="" class="maxWidth" />
              <div id="infoAboutEachHotel">
                <p className="hotelName">- {eachRestaurant.name}</p>
                  <p>- ${eachRestaurant.price_level} per person</p>
                  <div className="flexCenteredStar">
                    <p>- {eachRestaurant.rating}</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
              </div>
            </div>
          </div>
        )
      })
      return secondRestaurantList
    }
    
  showActivities1 = () => {
    let firstActivityList = this.state.activities.slice(0, 4)  
      firstActivityList = firstActivityList.map((eachActivity)=>{
        if(eachActivity.price_level === 0){
          eachActivity.price_level = "Free"
        } else if(!eachActivity.price_level) {
          eachActivity.price_level = Math.floor(Math.random() * ((80 - 20) + 1) + 20)
        } else if (eachActivity.price_level <= 4){
          eachActivity.price_level = eachActivity.price_level * Math.floor(Math.random() * ((35 - 10) + 1) + 10)
        }
        return(
          <div class="col-md-3">
            <div onClick={(e)=>this.chosenActivity(e, eachActivity)}>
              <img src={eachActivity.photos} alt="" class="maxWidth" />
              <div id="infoAboutEachHotel">
                <p className="hotelName">- {eachActivity.name}</p>
                  <p>- ${eachActivity.price_level} per person</p>
                  <div className="flexCenteredStar">
                    <p>- {eachActivity.rating}</p>
                    <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                  </div>
              </div>
            </div>
          </div>
        )
      })
      return firstActivityList
    }

    showActivities2 = () => {
      let secondActivityList = this.state.activities.slice(4, 8)  
        secondActivityList = secondActivityList.map((eachActivity)=>{
          if(eachActivity.price_level === 0){
            eachActivity.price_level = "Free"
          } else if(!eachActivity.price_level) {
            eachActivity.price_level = Math.floor(Math.random() * ((80 - 20) + 1) + 20)
          } else if (eachActivity.price_level <= 4){
            eachActivity.price_level = eachActivity.price_level * Math.floor(Math.random() * ((35 - 10) + 1) + 10)
          }
          return(
            <div class="col-md-3">
              <div>
                <img src={eachActivity.photos} alt="" class="maxWidth" />
                <div id="infoAboutEachHotel">
                  <p className="hotelName">- {eachActivity.name}</p>
                    <p>- ${eachActivity.price_level} per person</p>
                    <div className="flexCenteredStar">
                      <p>- {eachActivity.rating}</p>
                      <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                    </div>
                </div>
              </div>
            </div>
          )
        })
        return secondActivityList
      }

  render(){
    return(
      <div className="height">
        { this.state.loader ? 
        <div>
          {this.showLoader()}
        </div>
        :
        <div>
          <div className="flexCentered cityTitleCreate">
            <h1>{this.props.destination}</h1>
          </div>
          <div className="createInfo">
            <h2 className="createTitles">Hotels</h2>
            <img src={require('../images/hotel.png')} alt="logo" className="restaurantIcon"/>
          </div>
          <div className="container createPictureContainer">
            <div className="row blog">
              <div className="col-md-12">
                <div id="secondCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#secondCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#secondCarousel" data-slide-to="1"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                      {this.showHotels1()}                        
                      </div>     
                    </div>             
                    <div class="carousel-item">
                      <div class="row">
                      {this.showHotels2()}
                      </div>
                    </div>    
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="createInfo">
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
                      </div>     
                    </div>             
                    <div class="carousel-item">
                      <div class="row">
                      {this.showRestaurants2()}
                    </div>    
                  </div> 
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="createInfo">
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
                      </div>     
                    </div>             
                    <div class="carousel-item">
                      <div class="row">
                      {this.showActivities2()}
                      </div>    
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div>
       <nav className="navbar fixed-bottom budgetFooter">
          <p>Hola</p>
        </nav> 
      </div>
    </div>
    )
  }
}


export default Create;