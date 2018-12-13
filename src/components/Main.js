//Import React
import React, { Component } from 'react';
//Import Components
import '../styles/App.css';
import Home from './Home'
import Navbar from './Navbar';

class Main extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Home />
            </div>
        )
    }
}

export default Main;

//This component is being imported in 'App.js'