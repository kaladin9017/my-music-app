import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchAlbum} from '../../actions/index'

import { Card, Icon, Image } from 'semantic-ui-react'
import AlbumCards from './AlbumCards';

class SampleComponent extends Component {

  clickButton(e) {
    e.preventDefault()
    let artist = document.getElementById('artistName').value
    console.log(artist)
    this.props.fetchAlbum(artist)
  }


  render() {

    const data = this.props.test.data;

    if(data) {
      let albums = data.topalbums.album
      const cardList =[]
      for(let i=0;i<12;i++){
        cardList.push(<AlbumCards data={albums[i]}/>)
      }
      return (
        <div>
        <Card.Group itemsPerRow={3}>
          {cardList}
        </Card.Group>
        <form><input type='text' id="artistName" placeholder='Enter Artist'/><button onClick={this.clickButton.bind(this)}>click</button></form>
      </div>
      );
    }
    else return(<form><input type='text' id="artistName" placeholder='Enter Artist'/><button onClick={this.clickButton.bind(this)}>click</button></form>)
    }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ fetchAlbum }, dispatch)
}

function mapStateToProps({ test }) {
  return {
    test
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
