import React, { Component } from 'react'
import News from '../News';
import Message from '../Message';
import { Redirect, Route } from 'react-router-dom';
import MyNavLink from '../MyNavLink';
export default class Home extends Component {
  render () {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news" >News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message" >Message</MyNavLink>
          </li>
        </ul>
        <div>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/message"></Redirect>
        </div>
      </div>
    )
  }
}
