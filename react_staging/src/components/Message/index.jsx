import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom';
import Detail from '../Detail';
export default class About extends Component {

  state = {
    title: [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' }
    ]
  }

  render () {
    const { title } = this.state
    return (
      <div>
        <ul>
          {
            title.map(i => {
              return (
                <li key={i.id}>
                  <Link to={{ pathname: '/home/message/detail', state: { id: 1 } }} >{i.title}</Link>
                </li>
              )
            })
          }
        </ul>

        {/* Search */}
        <Route path="/home/message/detail" component={Detail} />
      </div>

    )
  }
}
