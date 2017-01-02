import React, { Component } from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addSong} from './actions/index';
import PlaylistModals from './components/playlist/PlaylistModals';

// import logo from './logo.svg';
import './App.css';

import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container, Modal } from 'semantic-ui-react'

import InvertedHeader from './components/common/Header'; //Header Component

class App extends Component {
  state = { visible: false, openOrClose: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  toggleOpenCloseModal = () => this.setState({ openOrClose: !this.state.openOrClose })

  render() {
    const { visible } = this.state
    const { openOrClose } = this.state
    return (
      <div className="App">
        <Button onClick={this.toggleVisibility}>Menu</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to='/'>
              <Menu.Item name='home'>
                <Icon name='home' />
                LastFM
              </Menu.Item>
            </Link>
            <Link to="soundcloud">
              <Menu.Item name='playlist'>
                <Icon name='music' />
                SoundCloud
              </Menu.Item>
          </Link>
            <Menu.Item name='playlist'>
              <Icon name='music'/>
              <span onClick={this.toggleOpenCloseModal} >
                Playlists
              </span>
                <PlaylistModals data={this.props.playlists} openOrClose={this.state.openOrClose} toggle={this.toggleOpenCloseModal.bind(this)}/>


          </Menu.Item>
            <Link to='album'>
            <Menu.Item name='albumsearch' >
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addSong }, dispatch)
}

function mapStateToProps({ playlists }) {
  return {
    playlists
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
