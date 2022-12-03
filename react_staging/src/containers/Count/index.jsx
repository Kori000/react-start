// 引入 connect 用于连接 redux 与 UI 组件
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction
} from '../../redux/count_action';

import React, { Component } from 'react'
import './index.css'

import { Button, Space, Select, Card } from 'antd';


class Count extends Component {

  state = {
    add: 1,
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
  render () {
    console.log(this.props)
    const { add, selectOptions } = this.state
    const { kx } = this.props
    return (
      <div className='container'>
        <Select
          defaultValue={add}
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



export default connect(
  state => ({ kx: state }),
  // 终极简写 API 层面的优化
  {
    jia: createIncrementAction,
    jian: createDecrementAction
  }
)(Count)
