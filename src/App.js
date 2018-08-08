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
        <div>
          <div className="hero-font">Hi, I'm Max</div>
          <div className="hero-image" />
          <div className="hero-background" />
        </div>
        <div className="info-section">
          <div className="title-about">About Me</div>
          <hr className="splitter-about" />
          <div className="about-paragraph">
            Start Bootstrap has everything you need to get your new website up
            and running in no time! All of the templates and themes on Start
            Bootstrap are open source, free to download, and easy to use. No
            strings attached!
          </div>
          <center className="btn-align">
            <button className="btn">LEARN MORE</button>
          </center>
        </div>
        <div className="info-section2">
          <div className="title-tools">Tools</div>
          <hr className="splitter-tools" />
          <div className="tools-container">
            <div className="row">
              <div className="box-t box-1">
                <img src="/images/react_icon.png" alt="react icon" />
              </div>
              <div className="box-t box-2">
                <img src="/images/html-5_icon.png" alt="html icon" />
              </div>
              <div className="box-t box-3">
                <img src="/images/css_icon.png" alt="css icon" />
              </div>
              <div className="box-t box-4">
                <img src="/images/ramda_icon.png" alt="ramda icon" />
              </div>
            </div>
            <div className="row">
              <div className="box-t box-5">
                <img src="/images/node_icon.png" alt="nodejs icon" />
              </div>
              <div className="box-t box-6">
                <img src="/images/mysql_icon.png" alt="git icon" />
              </div>
              <div className="box-t box-7">
                <img src="/images/couch-db_icon.png" alt="mysql icon" />
              </div>
              <div className="box-t box-8">
                <img src="/images/pouchdb_icon.png" alt="couch-db icon" />
              </div>
            </div>
            <div className="row">
              <div className="box-t box-9">
                <img src="/images/git_icon.png" alt="visual studio code icon" />
              </div>
              <div className="box-t box-10">
                <img src="/images/yarn_icon.png" alt="yarn icon" />
              </div>
              <div className="box-t box-11">
                <img src="/images/npm_icon.png" alt="npm icon" />
              </div>
              <div className="box-t box-12">
                <img src="/images/vscode_icon.png" alt="heroku icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="info-section3">
          <div className="title-about">Projects</div>
          <hr className="splitter-about" />
          <div className="projects-container">
            <div className="box-p box-1" />
            <div className="box-p box-2" />
            <div className="box-p box-3" />
            <div className="box-p box-4" />
          </div>
        </div>
        <div className="info-section2">
          <div className="title-tools">Info</div>
          <hr className="splitter-tools" />
          <div className="info-container">
            <div className="row">
              <div className="box-i box-1">
                <img src="/images/email-blue_icon.png" alt="email icon" />
              </div>
              <div className="box-i box-2">
                <img src="/images/resume_icon.png" alt="resume icon" />
              </div>
              <div className="box-i box-3">
                <img src="/images/linkedin_icon.png" alt="linkedin icon" />
              </div>
              <div className="box-i box-4">
                <img src="/images/github-info_icon.png" alt="github icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
