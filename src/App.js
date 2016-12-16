import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
    Header,
} from "semantic-ui-react";



import SampleComponent from "./components/SampleComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to My Songs</h2>
        </div>
        <SampleComponent />
      </div>
    );
  }
}

export default App;
