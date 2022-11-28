import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false
  }

  // 移动到 item 中高亮
  mouseHandle = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  // 删除
  removeTodo = (id) => {
    return () => {
      this.props.removeItem(id)
    }
  }

  // checked 状态切换
  changeChecked = (id) => {
    return (e) => {
      this.props.updateItem(id, e.target.checked)
    }
  }

  render () {
    const { name, id, done } = this.props
    const { mouse } = this.state

    return (
      <li
        onMouseEnter={this.mouseHandle(true)}
        onMouseLeave={this.mouseHandle(false)}
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.changeChecked(id)} />
          <span>{name}</span>
        </label>
        <button onClick={this.removeTodo(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li >
    )
  }
}
