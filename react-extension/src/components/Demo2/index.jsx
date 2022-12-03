import React, { Component } from 'react'
import { root } from '../../index';


export default class Demo2 extends Component {


  state = {
    count: 0,
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


  show = () => {
    alert(this.inpValue.value)
  }



  render () {
    const { count } = this.state
    return (
      <div id="demo1">
        <h1>{count}</h1>
        <button onClick={this.add} >+1</button>
        <button onClick={this.unMounted} >卸载</button>
        <input type="text" ref={c => this.inpValue = c} />
        <button onClick={this.show} >展示内容</button>

      </div>
    )
  }
}
