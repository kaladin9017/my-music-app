import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchAlbum} from '../actions/index'

import { Card, Icon, Image } from 'semantic-ui-react'


class SampleComponent extends Component {

  render() {
    const data = this.props.test.data;
    if(data) {
      console.log(data.topalbums)
      return (
        <Card>

       </Card>
      );
    }
    else return(<div><button onClick={this.props.fetchAlbum}>click</button></div>)
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
