import React, { Component } from 'react'

class ClassCompo extends Component{
  
    constructor(props) {
      super(props)
    
      this.state = {
         count:1,
         name:"APT"
      }
    }
    handlechange=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            {/* <h1>HELLO CLASS COMPONENT = {this.props.da} </h1> */}

            <h1>MY COUNTAR IS = {this.state.count} </h1>

            <button onClick={this.handlechange}>increment</button>

            </>
         
        )
    }
}
export default ClassCompo