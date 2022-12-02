import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class MyNavLink extends Component {
  render () {
    console.log(this.props)
    return (
      // <NavLink className='list-group-item' {...this.props} >{this.props.children}</NavLink>
      // 或者这种自闭和
      <NavLink className='list-group-item' {...this.props} />
    )
  }
}
