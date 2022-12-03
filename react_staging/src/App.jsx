import React, { Component } from 'react'
import './App.css'
import { Button, Space, Select, Card } from 'antd';




export default class App extends Component {

  state = {
    count: 0,
    add: 0,
    selectOptions: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
      {
        value: 4,
        label: '4',
      },
    ]
  }

  handleChange = (value) => {
    this.setState({
      add: value
    })
  };
  increment = () => {
    const { count, add } = this.state
    this.setState({
      count: count + add
    })
  }
  decrement = () => {
    const { count, add } = this.state
    this.setState({
      count: count - add
    })
  }
  incrementIfOdd = () => {
    const { count, add } = this.state
    if (count % 2 !== 0) {
      this.setState({
        count: count + add
      })
    }

  }
  incrementAsync = () => {
    setTimeout(() => {
      const { count, add } = this.state
      this.setState({
        count: count + add
      })
    }, 1000);
  }



  render () {

    const { count, add, selectOptions } = this.state

    return (

      <div className='container'>
        <Select
          defaultValue="0"
          style={{
            width: 120,
          }}
          onChange={this.handleChange}
          options={selectOptions}
        />

        <Card
          size="small"
          title="Count"
          style={{
            width: 900,
          }}
        >
          <p>{count}</p>
          <Space>
            <Button onClick={this.increment}>+</Button>
            <Button onClick={this.decrement}>-</Button>
            <Button onClick={this.incrementIfOdd}>当前值为奇数时+</Button>
            <Button onClick={this.incrementAsync}>异步+</Button>
          </Space>
        </Card>


      </div>
    )
  }
}
