import React, { Component } from 'react'
import './index.css'
import Item from '../List-item'
import PropTypes from 'prop-types'
export default class List extends Component {

  // props 限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateDone: PropTypes.func.isRequired
  }



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
