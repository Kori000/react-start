import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
export default class Header extends Component {

  static propTypes = {
    addItem: PropTypes.func.isRequired
  }

  // 新增
  addNewItem = (e) => {
    const { addItem } = this.props
    let newValue = e.target.value
    if (e.code !== 'Enter') return
    else if (newValue.trim() !== '') {
      const newObj = {
        id: nanoid(),
        name: newValue,
        done: false
      }
      addItem(newObj)
    }
  }



  render () {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.addNewItem} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
