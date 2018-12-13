//Import React
import React, { Component } from 'react';
//Import Components
import Profile from './Profile';
import Navbar from './Navbar';

class Main extends Component {
    render() {
        return(
            <div>
                <Profile />
                <Navbar />
            </div>
        )
    }
}

export default Main;

//This component is being imported in 'App.js'