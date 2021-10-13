import React, { Component } from 'react'
import Header from './components/Header.js'
import ConfigTable from './components/ConfigTable.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ConfigTable />
      </div>
    );
  }
}

export default App
