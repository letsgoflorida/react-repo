//Import React
import React, { Component } from 'react';


class Create extends Component {
  render(){
    return(
      <div className="height">
        {/* WAITING-TO-LOAD-PAGE ANIMATION FROM HERE:  */}

        {/* <div className="flexCenteredColumnWH">
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
        </div> */}

        {/* TO HERE */}
       
        <div className="flexCentered cityTitleCreate">
          <h1>Fort Lauderdale</h1>
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
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <div>
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                          <div id="infoAboutEachHotel">
                            <p className="hotelName">- Hotel Pachano Company</p>
                            <p>- Very Expensive</p>
                            <div className="flexCenteredStar">
                             <p>- Dos estrellas</p>
                             <img src={require('../images/star.png')} alt="logo" className="starIcon"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </p>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    </div>     
                  </div>             
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
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
        <div className="container createPictureContainer">
          <div className="row blog">
            <div className="col-md-12">
              <div id="firstBlogCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#firstBlogCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#firstBlogCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </p>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    </div>     
                  </div>             
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
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
        <div className="container createPictureContainer">
          <div className="row blog">
            <div className="col-md-12">
              <div id="thirdCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#thirdCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#thirdCarousel" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <p>
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </p>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    </div>     
                  </div>             
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="#">
                          <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                        </a>
                      </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a href="#">
                        <img src="http://placehold.it/250x250" alt="" className="maxWidth" />
                      </a>
                    </div>
                  </div>
                </div>    
              </div> 
            </div>
          </div>
        </div>
      </div>
       <nav className="navbar fixed-bottom budgetFooter">
          <p>Hola</p>
        </nav> 
      </div>
    )
  }
}


export default Create;