//Import React
import React, { Component } from 'react';

//Import styles
import './styles/wickedcss.css'
//Import components
import Main from './components/Main.js';
import './styles/App.css';


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
