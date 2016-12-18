import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
    Header,
    Container,
} from "semantic-ui-react";

import InvertedHeader from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvertedHeader />
          {this.props.children}
      </div>
    );
  }
}

export default App;
