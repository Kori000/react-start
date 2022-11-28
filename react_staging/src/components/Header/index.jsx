import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';

export default class Header extends Component {

  // props 限制
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }



  addNewItem = (e) => {
    let { addItem } = this.props

    if (e.code !== 'Enter') {
      return
    }
    if (e.target.value.trim() === '') {
      return
    }
    let newObj = {
      id: nanoid(),
      name: e.target.value,
      done: false
    }
    addItem(newObj)
  }
  render () {
    return (
      <div className="todo-header">
        <input onKeyUp={this.addNewItem} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
