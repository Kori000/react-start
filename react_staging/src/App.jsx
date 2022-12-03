import React, { Component } from 'react'
import './App.css'
import { Button, Space, Select, Card } from 'antd';

import store from './redux/store';
import { createIncrementAction, createDecrementAction } from './redux/count_action';

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
    store.dispatch(createIncrementAction(add))

  }
  decrement = () => {
    const { add } = this.state
    store.dispatch(createDecrementAction(add))
  }
  incrementIfOdd = () => {
    const { add } = this.state
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(add))
    }

  }
  incrementAsync = () => {
    setTimeout(() => {
      const { add } = this.state
      store.dispatch(createIncrementAction(add))
    }, 1000);
  }

  componentDidMount () {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render () {
    console.log(store)
    const { count, add, selectOptions } = this.state
    const countState = store.getState()
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
          <p>{countState}</p>
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
