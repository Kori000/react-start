import React, { Component } from 'react';
import './index.css';

export default class Hellwo extends Component {
  // 全选按钮逻辑
  changeAllState = (e) => {
    this.props.updataAll(e.target.checked)
  }

  // 清除所有已完成的
  clearTrue = () => {
    this.props.removeAllTrue()
  }

  render () {
    const { todos } = this.props

    // 总数
    const total = todos.length
    // 当前完成的
    const nowTrue = todos.reduce((pre, cur) => {
      return pre + (cur.done === true ? 1 : 0)
    }, 0)
    // 全选按钮状态
    const checkAllState = total === nowTrue && total !== 0
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={checkAllState} onChange={this.changeAllState} />
        </label>
        <span>
          <span>已完成{nowTrue}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.clearTrue} >清除已完成任务</button>
      </div>
    );
  }
}
