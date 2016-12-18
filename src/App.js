import React, { Component } from 'react';
import {Link} from 'react-router'


// import logo from './logo.svg';
import './App.css';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

import InvertedHeader from './components/common/Header'; //Header Component

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div className="App">
        <Button onClick={this.toggleVisibility}>Menu</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to='/'>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
          </Link>
            <Menu.Item name='playlist'>
              <Icon name='music' />
              Playlists
            </Menu.Item>
            <Menu.Item name='friends'>
              <Icon name='user' />
              Friends
            </Menu.Item>
            <Link to='album'>
            <Menu.Item name='albumsearch'>
              <Icon name='music' />
              Album Search
            </Menu.Item>
           </Link>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
