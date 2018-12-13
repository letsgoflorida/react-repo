//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Profile from './Profile';
import Navbar from './Navbar';

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar />
                
            </div>
        )
    }
}

export default Main;

//This component is being imported in 'App.js'