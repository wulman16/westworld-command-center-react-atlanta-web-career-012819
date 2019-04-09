import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'


class App extends Component {

  // State includes: 
  //    - which host is selected right now, if any
  //    - a list of active hosts
  //    - what areas have which hosts

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    selected: null
  }

  handleClick = (id) => {
    this.setState({
      selected: id
    })
  }

  handleToggle = (hostId) => {
    const updatedHosts = this.state.hosts.map(h => {
      return h.id === hostId ? {...h, active: !h.active} : h
    })
    this.setState({
      hosts: updatedHosts
    })
  }

  findHost = (hostId) => {
    return this.state.hosts.find(host => hostId === host.id)
  }

  componentDidMount(){
    fetch(`http://localhost:4000/areas`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          areas: data
        })
      })
    fetch(`http://localhost:4000/hosts`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          hosts: data
        })
      })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} handleClick={this.handleClick} selected={this.state.selected} detailsHost={this.findHost(this.state.selected)} handleToggle={this.handleToggle} />
      </Segment>
    )
  }
}

export default App;
