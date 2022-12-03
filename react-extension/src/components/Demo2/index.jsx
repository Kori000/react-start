import React, { Component } from 'react'
import { root } from '../../index';


export default class Demo2 extends Component {


  state = {
    count: 0
  }

  add = () => {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }

  unMounted = () => {
    root.unmount()
  }


  componentDidMount () {
    setInterval(() => {
      this.add()
    }, 1000);
  }




  render () {
    const { count } = this.state
    return (
      <div id="demo1">
        <h1>{count}</h1>
        <button onClick={this.add} >+1</button>
        <button onClick={this.unMounted} >卸载</button>
      </div>
    )
  }
}
