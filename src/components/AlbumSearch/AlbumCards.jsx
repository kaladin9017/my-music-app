import React from 'react';

import {Card, Icon, Image} from 'semantic-ui-react';


const AlbumCards = (props) => {
  let data = props.data
  console.log(data)
  return (
    <Card>
     <Image src={data.image[3]['#text']} />
     <Card.Content>
       <Card.Header>
         {data.name}
       </Card.Header>
       <Card.Meta>
         <span className='name'>
           {data.artist.name}
         </span>
       </Card.Meta>
     </Card.Content>
     <Card.Content extra>
       <a>
         <Icon name='music' />
         {data.playcount}
       </a>
     </Card.Content>
   </Card>
  )
}

export default AlbumCards;
