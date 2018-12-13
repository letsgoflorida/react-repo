//Import React
import React, { Component } from 'react';
//Import styles
import './styles/wickedcss.css'
import './styles/App.css';
//Import components
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;


//This component is being imported in 'index.js'
