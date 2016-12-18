import React from 'react';

import {Card, Icon, Image} from 'semantic-ui-react';


const FeaturedTracksCards = (props) => {
  let data = props.data
  return (
    <Card>
     <Image src={data.image[3]['#text']} />
     <Card.Content>
       <Card.Header>
         {data.name}
       </Card.Header>
       <Card.Meta>
         <span className='name'>
           {data.artist['#text']}
         </span>
       </Card.Meta>
     </Card.Content>
     <Card.Content extra>
       <a>
         <Icon name='music' />
         {data.album['#text']}
       </a>
     </Card.Content>
   </Card>
  )
}

export default FeaturedTracksCards;
