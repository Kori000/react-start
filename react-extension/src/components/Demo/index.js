import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  addNum = () => {
    // 对象式 (语法糖)
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log(this.state.count)
    // }
    // )

    // 函数式
    this.setState((state, props) => {
      return ({ count: state.count + 2 })
    }, () => {
      console.log(this.state.count)
    })

  }

  render () {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和为: {count}</h1>
        <button onClick={this.addNum} >+1</button>
      </div>
    )
  }
}
