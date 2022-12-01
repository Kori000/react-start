import axios from 'axios'
import React, { Component } from 'react'

export default class Header extends Component {

  search = async () => {
    const { keyWordElement: { value: keyWord } } = this
    const { updateState } = this.props

    updateState({
      isFirst: false,
      isLoading: true
    })
    try {
      const { data: res } = await axios.get(`https://api.github.com/search/users?q=${keyWord}`)

      updateState({
        users: res.items,
        isLoading: false

      })

    } catch (error) {
      updateState({
        err: error.message,
        isLoading: false

      })
    }
  }
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search} >Search</button>
        </div>
      </section>
    )
  }
}
