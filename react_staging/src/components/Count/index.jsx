import React, { Component } from 'react'
import './index.css'
import { Button, Space, Select, Card } from 'antd';

export default class Cout extends Component {

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
    this.props.jia(add)
  }
  decrement = () => {
    const { add } = this.state
    this.props.jian(add)
  }
  incrementIfOdd = () => {
    const { add } = this.state
    if (this.props.kx % 2 !== 0) {
      this.props.jia(add)
    }

  }
  incrementAsync = () => {
    setTimeout(() => {
      const { add } = this.state
      this.props.jia(add)
    }, 1000);
  }

  componentDidMount () {

  }

  render () {

    console.log(this.props)

    const { selectOptions } = this.state
    const { kx } = this.props
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
          <p>{kx}</p>
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
