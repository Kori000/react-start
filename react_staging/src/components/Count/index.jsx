import React, { Component } from 'react'
import './index.css'
import { Button, Space, Select, Card } from 'antd';

export default class App extends Component {

  state = {
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
    const { add } = this.state

  }
  decrement = () => {
    const { add } = this.state
  }
  incrementIfOdd = () => {
    const { add } = this.state


  }
  incrementAsync = () => {
    setTimeout(() => {
      const { add } = this.state
    }, 1000);
  }

  componentDidMount () {

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
          <p>???</p>
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
