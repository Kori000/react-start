import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class About extends Component {

  state = {
    title: [
      { id: '1', title: '我是超人 A' },
      { id: '2', title: '我是超人 B' },
      { id: '3', title: '我是超人 C' }
    ]
  }

  render () {
    const { title } = this.state
    const { id } = this.props.match.params
    let resObj = title.find(res => {
      return res.id === id
    })
    console.log(resObj)
    return (
      <ul>
        <li>
          <Link to="home/message/detail" >{resObj.title}</Link>
        </li>
      </ul>
    )
  }
}
