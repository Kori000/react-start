import React, {Component} from 'react'
import Hellow from './components/Hellow';
import Welcome from './components/Welcome'

class App extends Component {
  render () {
    return (
      <div>
        <Hellow/>
        <Welcome/>
      </div>
    )
  }
}

export default App
