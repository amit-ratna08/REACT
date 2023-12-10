import React, { Component } from 'react'
import NormarCompo from './NormarCompo'
import PureCompo from './PureCompo'

 class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    
    handle=()=>{
        this.setState({
            count:this.state.count
        })
    }

  render() {
    return (
      <div>
        <h1>MY COUNTAR IS :- {this.state.count} </h1>
        <button onClick={this.handle}>increment</button>


        <NormarCompo data={this.state.count} />
        <PureCompo  data={this.state.count} />
      </div>
    )
  }
}

export default App
