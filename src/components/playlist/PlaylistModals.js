import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const PlaylistModal = (props) => {
  console.log("data", props.data)
  if(!props.data.formData){
    return(
      <Modal open={props.openOrClose}>
        <Modal.Header>title</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>description</p>
          </Modal.Description>
        </Modal.Content>
        <Button onClick={props.toggle}>close</Button>
      </Modal>

    )
  }
  else {
    return (<Modal open={props.openOrClose}>
      <Modal.Header>{props.data.formData.title}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
        <Modal.Description>
          <Header>Genre: {props.data.formData.genre}</Header>
          <p>Description: {props.data.formData.details}</p>
        </Modal.Description>
      </Modal.Content>
      <Button onClick={props.toggle}>close</Button>
    </Modal>)
  }
}

export default PlaylistModal;
