import React, { Component } from 'react'
import './index.css';


export default class List extends Component {



  render () {

    const { users, isLoading, isFirst, err } = this.props

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: '#c00' }}>{err}</h2> :
                users.map(user => {
                  return (
                    <div className="card" key={user.id}>
                      <a href={user.html_url} target="_blank" rel="noreferrer">
                        <img alt='avatar' src={user.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{user.login}</p>
                    </div>
                  )
                })
        }

      </div>
    )
  }
}
