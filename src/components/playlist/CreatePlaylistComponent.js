import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'

import {createPlaylist} from '../../actions/index';

const genres = [
  { text: 'Rap', value: 'rap' },
  { text: 'Rock', value: 'rock' },
  { text: 'Jazz', value: 'jazz' },
]

class CreatePlaylistComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { formData: {} }

  }
  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData, songs: [] })
    this.props.createPlaylist(this.state)
  }

  render() {
    const { formData, value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input label='Title' name='title' placeholder='Plalist Name' />
          <Form.Select label='Genre' name='genre' options={genres} placeholder='genre' />
        </Form.Group>

        <Form.TextArea name='details' label='Details' placeholder='Enter a brief description' rows='3' />
        <Button primary type='submit'>Submit</Button>

      </Form>
    )

    }
  }

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ createPlaylist }, dispatch)
}

function mapStateToProps({ playlists }) {
  return {
    playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistComponent);
