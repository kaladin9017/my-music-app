import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchAlbum} from '../actions/index'

import { Card, Icon, Image } from 'semantic-ui-react'


class SampleComponent extends Component {

  render() {
    const data = this.props.test[0];
    if(data) {
      console.log(data)
      return (
        <Card>
         <Image src={data.image[2]['#text']} />
         <Card.Content>
           <Card.Header>
             {data.name}
           </Card.Header>
           <Card.Meta>
             <span className='date'>
               {data.artist}
             </span>
           </Card.Meta>
           <Card.Description>
             album description
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <a>
             <Icon name='music' />
             add track number
           </a>
         </Card.Content>
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
