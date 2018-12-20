//Import React
import React, { Component } from 'react';


class Create extends Component {
  state = {
    destination: this.props.destinationDetails
  }
  render(){
    return(
      <div>
        <div className="flexCentered cityTitleCreate">
          <h1>Fort Lauderdale</h1>
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
                      <div class="col-md-3">
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
                      </div>
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
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
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                      </a>
                    </div>
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
                      <div class="col-md-3">
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
                      </div>
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
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
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                      </a>
                    </div>
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
                      <div class="col-md-3">
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
                      </div>
                    </div>     
                  </div>             
                  <div class="carousel-item">
                    <div class="row">
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
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" class="maxWidth" />
                      </a>
                    </div>
                  </div>
                </div>    
              </div> 
            </div>
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}


export default Create;