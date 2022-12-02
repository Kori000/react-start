import React, { Component } from 'react'
import './App.css'
import { Link, Route, NavLink, Switch, Redirect, HashRouter } from 'react-router-dom';
import About from './components/About';
import About2 from './components/News';
import Home from './components/Home';
import MyNavLink from './components/MyNavLink';


export default class App extends Component {

  state = {

  }



  updateState = (update) => {

    this.setState(update)
  }

  render () {


    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
              {/* <a className="list-group-item" href="/about">About</a>
              <a className="list-group-item active" href="/home" aria-current="page">Home</a> */}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <div>
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
