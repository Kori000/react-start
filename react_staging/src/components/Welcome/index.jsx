import React, {Component} from 'react';
import css from './index.module.css'

export default  class Welcome extends Component {
  render () {
    return (
      <div>
        <h1 className={css.welcome}>React</h1>
      </div>
    )
  }
}
