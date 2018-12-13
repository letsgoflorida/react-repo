//Import React
import React, { Component } from "react";


class Home extends Component {
    render() {
        return(
          <div>
            <div id="formContent" class="container fadeIn">
              <div class="row flexCenteredWH">
                <div class="col-md-4 col-md-pull-7">
                  <div class="booking-form">
                    <form>
                        <div class="form-group">
                            <span class="form-label">Your Destination</span>
                            <input class="form-control" type="text" placeholder="Enter a destination or hotel name"/>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <span class="form-label">Check In</span>
                                    <input class="form-control" type="date" required/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <span class="form-label">Check out</span>
                                    <input class="form-control" type="date" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <span class="form-label">Rooms</span>
                                    <select class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <span class="form-label">Adults</span>
                                    <select class="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <span class="form-label">Children</span>
                                    <select class="form-control">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <span class="select-arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div class="form-btn flexCentered">
                            <button class="submit-btn">Check availability</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  
    <div class="flexCenteredWH backgroundImage">   
       <h1 id="title" class="slideDown">Your journey begins</h1> 
    </div>

    <div id="aboutUs" class="WH">
        <h1 id="titleAboutUs">About Us</h1>
        <div id="contentAboutUs" class="flexSpaceEvenlyH">
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