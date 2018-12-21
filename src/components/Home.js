//Import React
import React, { Component } from "react";

class Home extends Component {

	state = {
    destination: "",
  }


  componentDidMount(){
    document.getElementById("formContent").setAttribute("class", "hide");
    document.getElementById("slogan").setAttribute("class", "hide");
    setTimeout(()=>{
        document.getElementById("title").setAttribute("class", "fadeOut")
        setTimeout(()=>{
            document.getElementById("formContent").setAttribute("class", "fadeIn")
            document.getElementById("slogan").setAttribute("class", "fadeIn")
        },100)
    },2000)
  }
	
	handleChange = (e) =>	{
		this.setState({[e.target.name]: e.target.value})
	}
		
	handleFormSubmit = (e) =>{
    e.preventDefault();
    this.props.submitForm(this.state.destination)
    this.setState({
      destination: ""
    })
    this.props.history.push("/create")
	}

  render() {
      return(
        <div>
          <h1 id="slogan">Let's Go Florida</h1>
            <div id="formContent" className="container fadeIn">
              <div className="row flexCenteredWH">
                <div className="col-md-4 col-md-pull-7">
                  <div className="booking-form transparentBackground">
                  <form onSubmit={this.handleFormSubmit}>
                      <div className="form-group">
                        <span className="form-label">Your Destination</span>
                        <input className="form-control" type="text" name="destination" placeholder="Miami" value={this.state.destination} onChange={e => this.handleChange(e)}/>
                      </div>       
                      
                      <div className="form-btn flexCentered">
                        <button className="submit-btn">Check availability</button>
                      </div>
                  	</form>
              		</div>
          			</div>
      				</div>
  					</div>  
  					<div className="flexCenteredWH backgroundImage">   
     					<h1 id="title" className="slideDown">Your journey begins</h1> 
  					</div>

  					<div id="aboutUs" className="WH">
    					<h1 id="titleAboutUs">About Us</h1>
              <div id="contentAboutUs" className="flexSpaceEvenlyH">
                <p className="textAboutUs"><span className="hotelName">Jaime Jacobo</span>: After graduating from my Psychology degree in Spain, I decided to join a Web Development Full Stack Bootcamp in Miami to guide my life towards what I like to do most in my life: programming. 
                  <br />
                  <br />
                  <span className="hotelName">Oscar Pachano</span>: After spending part of my life to the service and care of patient as a M.D. I decided to change the course of my life and guide it towards a new found passion for programming and web development.
                  <br />
                  <br />
                 For this project, we decided to work together to consolidate all the knowledge that we have acquired during an intensive JavaScript Bootcamp. We felt inspired on the idea of creating a website that shows all of our passion. After presenting this project, our desire of growing as developers has been increasing and we are sure this is just the beggining of an amazing journey. </p>
                <div className="aboutUsPictures">
                  {/* <img src="./stylesheets/shushi.gif" alt=""/> */}
                  <img src={require('../images/fotoJaime.jpg')} alt="fotoJaime"/>
                  <img src={require('../images/fotoOscar.jpg')} alt="fotoOscar"/>
                  {/* <img src="./stylesheets/shushi.gif" alt=""/> */}
                </div>
              </div>
              <div className="aboutUsContactInfo">
                <p>Jaime Jacobo ||  github.com/JaimeJacobo  ||  linkedin.com/ln/JaimeJacobo</p>
                <br />
                <p>Oscar Pachano  ||  github.com/OPachano  ||  linkedin.com/ln/OscarPachano</p>
              </div>
  				  </div>
				  </div>
		)
	}
}



export default Home;

//This component is being imported in "Main.js"