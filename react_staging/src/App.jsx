import React, { Component } from 'react'
import './App.css'
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import About from './components/About';
import About2 from './components/About2';
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
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/about" component={About2}></Route>
                  <Route path="/home" component={Home}></Route>
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
