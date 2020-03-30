import React, { Component } from 'react'
import Home from './Home'

class App extends Component {
  render() {
    const appContainer = {
      display: 'flex'
    }
    return (
      <div style={appContainer}>
        <Home></Home>
      </div>
    )
  }
}

export default App
