import React, { Component } from 'react'
import './index.css'
import Item from '../List-item'

export default class List extends Component {
  render () {
    const { todos, updateDone } = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map((todo) => {
              return <Item key={todo.id} {...todo} updateDone={updateDone} />
            })
          }
        </ul>
      </div>
    )
  }
}
