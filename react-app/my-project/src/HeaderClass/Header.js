//  rce

import React, { Component } from 'react'

export class Header extends Component {
  constructor(){
    super();
    this.state={
      name:"life cycle"
    };
    console.log("constructor");
  }

  componentDidMount(){
    console.log("ComponentDidMount");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate", this.state.name);
  }

  render() {
    console.log("render");
    return (
      <div>Header Class {this.state.name} 
      <button onClick={()=> {this.setState({name:"React life cycle"},()=>{
        console.log(this.state.name)
      });
      console.log(this.state.name)}}>update</button>
      </div>
    )
  }
}

export default Header