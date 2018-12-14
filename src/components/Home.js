//Import React
import React, { Component } from "react";


class Home extends Component {
    render() {
        return(
          <div>
            <div id="formContent" className="container fadeIn">
              <div className="row flexCenteredWH">
                <div className="col-md-4 col-md-pull-7">
                  <div className="booking-form">
                    <form>
                        <div className="form-group">
                            <span className="form-label">Your Destination</span>
                            <input className="form-control" type="text" placeholder="Enter a destination or hotel name"/>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <span className="form-label">Check In</span>
                                    <input className="form-control" type="date" required/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <span className="form-label">Check out</span>
                                    <input className="form-control" type="date" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <span className="form-label">Rooms</span>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <span className="form-label">Adults</span>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <span className="form-label">Children</span>
                                    <select className="form-control">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
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
            <p>CC nerf face check inhibitor counter gank troll sustain bronze fountain kite wow pots CC gap closer BotRK CS DC. Ganks feed queue skintimidation tank red buff such elixir inhibitor trade jukes harass vision cooldown ARAM esports assist double buffs backdoor. Backdoor League of Legends lag fountain banana flash utility push lane ranked golems elixir bush counter masteries global. Banana report runes flash inhibitor double buffs cooldown overextending lore jukes dodge bruiser inhibitor 1v1 overstaying gap closer flash vision CS League of Legends. Fountain 1v1 roam peeling vision glass cannon bait counter gank troll map ARAM trade pink jungle ARAM. Banana fog of war so smurf bait jungle last hit quadrakill last hit lore skins masteries queue global pro strats League of runes banana chase. KS troll dive red buff pentakill sustain inhib queue inhibitor lane nexus ult lane esports ARAM face check assist. Dodge ignite utility assist pro face check towers KS skillshot instalock overstaying dunk banana elixir knockup troll queue poke blue buff 1v1.</p>
            <img src="./stylesheets/shushi.gif" alt=""/>
        </div>
        <p id="aboutUsFooter">Hecho con amor 3</p>
    </div>
            </div>
        )
    }
}


export default Home;

//This component is being imported in "Main.js"