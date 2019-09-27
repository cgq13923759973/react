import React, { Component } from 'react';
import './App.css';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
