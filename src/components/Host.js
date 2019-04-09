import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {

  // TODO: have handleClick also handle the className toggling

  return(
    <Card
      className={props.selected === props.host.id ? "host selected" : "host"}
      onClick={() => props.handleClick(props.host.id)}
      image={props.host.imageUrl}
      href
      raised
    />
  )
}

export default Host
