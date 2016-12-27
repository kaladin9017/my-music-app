import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchFeaturedTracks} from '../../actions/index'

import { Card, Icon, Image } from 'semantic-ui-react'

import SoundCloudTracksCards from './SoundCloudTracksCards';
import LoaderComponent from '../common/LoaderComponent';

class SoundCloudTracksComponent extends Component {

  render() {
    const data = this.props.userTracks;
    console.log(data)

    if(data) {
      let tracks = data.recenttracks.track
      const cardList =[]
      for(let i=0;i<12;i++){
        cardList.push(<SoundCloudTracksCards data={tracks[i]} key={i}/>)
      }
      return (
        <Card.Group itemsPerRow={3}>
          {cardList}
        </Card.Group>
      );
  }
    return (
      <LoaderComponent />
    )

}
componentDidMount() {
  setTimeout(this.props.fetchFeaturedTracks, 4000)
  // this.props.fetchFeaturedTracks()
}


}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ fetchFeaturedTracks }, dispatch)
}

function mapStateToProps({ userTracks }) {
  return {
    userTracks : userTracks.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundCloudTracksComponent);
