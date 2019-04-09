import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'

// TODO: state includes list of log events?

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  inactiveHosts = (hosts) => hosts.filter(host => !host.active)

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.inactiveHosts(this.props.hosts)} handleClick={this.props.handleClick} selected={this.props.selected} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details detailsHost={this.props.detailsHost} handleToggle={this.props.handleToggle}/>
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
