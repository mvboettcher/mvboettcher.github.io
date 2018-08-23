import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="column">
        <NavBar />
        <div>
          <div className="hero-font">Hi, I'm Max</div>
          <div className="hero-image" />
          <div className="hero-background" />
        </div>
        <div
          className="primary-container"
          style={{ backgroundColor: '#006494' }}
        >
          <div className="title-about">About Me</div>
          <hr className="divider" style={{ backgroundColor: '#e8f1f2' }} />
          <div className="about-paragraph">
            I'm a full-stack web developer living in Charleston, SC. I recently
            graduated from JRS Coding School, where I learned about JavaScript
            development with a focus in functional programming. When I'm not
            coding, I enjoy drinking craft beer and going on camping trips with
            friends.
          </div>
          <center className="btn-align">
            <button className="btn">LEARN MORE</button>
          </center>
        </div>
        <div
          className="primary-container"
          style={{ backgroundColor: '#e8f1f2' }}
        >
          <div className="title-tools">Tools</div>
          <hr className="divider" style={{ backgroundColor: '#006494' }} />
          <div
            className="column"
            style={{ width: '66%', alignItems: 'center' }}
          >
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <img src="/images/react_icon.png" alt="react icon" />
              </div>
              <div className="box-t">
                <img src="/images/html-5_icon.png" alt="html icon" />
              </div>
              <div className="box-t">
                <img src="/images/css_icon.png" alt="css icon" />
              </div>
              <div className="box-t">
                <img src="/images/redux_icon.png" alt="redux icon" />
              </div>
            </div>
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <img src="/images/node_icon.png" alt="nodejs icon" />
              </div>
              <div className="box-t">
                <img src="/images/mysql_icon.png" alt="git icon" />
              </div>
              <div className="box-t">
                <img src="/images/couch-db_icon.png" alt="mysql icon" />
              </div>
              <div className="box-t">
                <img src="/images/ramda_icon.png" alt="ramda icon" />
              </div>
            </div>
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <img src="/images/git_icon.png" alt="visual studio code icon" />
              </div>
              <div className="box-t">
                <img src="/images/yarn_icon.png" alt="yarn icon" />
              </div>
              <div className="box-t">
                <img src="/images/npm_icon.png" alt="npm icon" />
              </div>
              <div className="box-t">
                <img src="/images/vscode_icon.png" alt="heroku icon" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="primary-container"
          style={{ backgroundColor: '#13293d' }}
        >
          <div className="title-about">Projects</div>
          <hr className="divider" style={{ backgroundColor: '#e8f1f2' }} />
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="box-p" />
            <div className="box-p" />
          </div>
        </div>
        <div
          className="primary-container"
          style={{ backgroundColor: '#e8f1f2' }}
        >
          <div className="title-tools">Info</div>
          <hr className="divider" style={{ backgroundColor: '#006494' }} />
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="box-i">
              <a href="mailto:mvboettcher@gmail.com">
                <img
                  src="/images/email-black-circle_icon.png"
                  alt="email icon"
                />
              </a>
            </div>
            <div className="box-i">
              <a href="/images/max-boettcher.pdf" download>
                <img src="/images/resume-black2_icon.png" alt="resume icon" />
              </a>
            </div>
            <div className="box-i">
              <a
                href="https://www.linkedin.com/in/maxboettcher/"
                target="_blank"
              >
                <img
                  src="/images/linkedin-circle-black_icon.png"
                  alt="linkedin icon"
                />
              </a>
            </div>
            <div className="box-i">
              <a href="https://github.com/mvboettcher" target="_blank">
                <img
                  src="/images/github-circle-black_icon.png"
                  alt="github icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
