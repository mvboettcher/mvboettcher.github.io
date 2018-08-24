import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

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
            style={{ width: '75%', alignItems: 'center' }}
          >
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      React
                    </Typography>
                  }
                >
                  <img src="/images/react_icon.png" alt="react icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      HTML
                    </Typography>
                  }
                >
                  <img src="/images/html-5_icon.png" alt="html icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      CSS
                    </Typography>
                  }
                >
                  <img src="/images/css_icon.png" alt="css icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Redux
                    </Typography>
                  }
                >
                  <img src="/images/redux_icon.png" alt="redux icon" />
                </Tooltip>
              </div>
            </div>
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Node.js
                    </Typography>
                  }
                >
                  <img src="/images/node_icon.png" alt="nodejs icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      MySQL
                    </Typography>
                  }
                >
                  <img src="/images/mysql_icon.png" alt="git icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      CouchDB
                    </Typography>
                  }
                >
                  <img src="/images/couch-db_icon.png" alt="mysql icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Ramda
                    </Typography>
                  }
                >
                  <img src="/images/ramda_icon.png" alt="ramda icon" />
                </Tooltip>
              </div>
            </div>
            <div
              className="row"
              style={{ width: '100%', justifyContent: 'space-evenly' }}
            >
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Git
                    </Typography>
                  }
                >
                  <img
                    src="/images/git_icon.png"
                    alt="visual studio code icon"
                  />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Yarn
                    </Typography>
                  }
                >
                  <img src="/images/yarn_icon.png" alt="yarn icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      npm
                    </Typography>
                  }
                >
                  <img src="/images/npm_icon.png" alt="npm icon" />
                </Tooltip>
              </div>
              <div className="box-t">
                <Tooltip
                  placement="top"
                  title={
                    <Typography variant="display2" style={{ color: 'white' }}>
                      Visual Studio Code
                    </Typography>
                  }
                >
                  <img src="/images/vscode_icon.png" alt="heroku icon" />
                </Tooltip>
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
          <div
            className="row"
            style={{ width: '100%', justifyContent: 'center' }}
          >
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
