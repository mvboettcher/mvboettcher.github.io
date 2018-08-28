import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Typography from '@material-ui/core/Typography'
import SectionAbout from './sections/SectionAbout'
import SectionTools from './sections/SectionTools'
import SectionProjects from './sections/SectionProjects'
import SectionInfo from './sections/SectionInfo'

class App extends Component {
  render() {
    return (
      <div className="column">
        <NavBar />
        <div>
          <div className="hero-font">
            <div>Hi, I'm Max</div>
          </div>
          <div className="hero-image" />
          <div className="hero-background" />
        </div>
        <SectionAbout />
        <SectionTools />
        <SectionProjects />
        <SectionInfo />
      </div>
    )
  }
}

export default App
