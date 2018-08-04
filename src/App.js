import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import './App.css'

// home about portolio contact

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>HOME</div>
        <div>ABOUT</div>
        <div>PORTFOLIO</div>
        <div>CONTACT</div>
      </div>
    )
  }
}

export default App
