import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {
    Header,
    Container,
} from "semantic-ui-react";

import InvertedHeader from './components/common/Header';
import AlbumSearchComponent from './components/AlbumSearch/AlbumSearchComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvertedHeader />
          <AlbumSearchComponent/>
      </div>
    );
  }
}

export default App;
