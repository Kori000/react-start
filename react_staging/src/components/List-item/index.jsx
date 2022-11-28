import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse: false
  }


  mouseHandle = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  checkChange = (id) => {
    return (e) => {
      const { updateDone } = this.props

      updateDone(id, e.target.checked)
    }
  }
  render () {
    const { name, done, id } = this.props
    const { mouse } = this.state
    return (
      <li
        onMouseEnter={this.mouseHandle(true)}
        onMouseLeave={this.mouseHandle(false)}
        style={{ background: mouse ? '#ddd' : '#fff' }}
      >
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.checkChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li >
    )
  }
}
