import React, { Component } from 'react';
import './index.css';
import Item from '../List-item';

export default class List extends Component {
  render() {
    return (
      <div>
        <ul className="todo-main">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ul>
      </div>
    );
  }
}
