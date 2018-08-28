import React from 'react'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const SectionTools = () => {
  return (
    <div className="primary-container" style={{ backgroundColor: '#e8f1f2' }}>
      <div className="title-tools">What I Know</div>
      <hr className="divider" style={{ backgroundColor: '#006494' }} />
      <div className="column" style={{ width: '75%', alignItems: 'center' }}>
        <div
          className="row"
          style={{ width: '100%', justifyContent: 'space-evenly' }}
        >
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  React
                </Typography>
              }
            >
              <a href="https://reactjs.org/" target="_blank">
                <img src="/images/react_icon.png" alt="react icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  HTML
                </Typography>
              }
            >
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
              >
                <img src="/images/html-5_icon.png" alt="html icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  CSS
                </Typography>
              }
            >
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <img src="/images/css_icon.png" alt="css icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  Redux
                </Typography>
              }
            >
              <a href="https://redux.js.org/" target="_blank">
                <img src="/images/redux_icon.png" alt="redux icon" />
              </a>
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
                <Typography variant="display1" style={{ color: 'white' }}>
                  Node.js
                </Typography>
              }
            >
              <a href="https://nodejs.org/en/" target="_blank">
                <img src="/images/node_icon.png" alt="nodejs icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  MySQL
                </Typography>
              }
            >
              <a href="https://www.mysql.com/" target="_blank">
                <img src="/images/mysql_icon.png" alt="git icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t" style={{ alignItems: 'flex-end' }}>
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  CouchDB
                </Typography>
              }
            >
              <a href="http://couchdb.apache.org/" target="_blank">
                <img src="/images/couch-db_icon.png" alt="mysql icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  Ramda
                </Typography>
              }
            >
              <a href="https://ramdajs.com/" target="_blank">
                <img src="/images/ramda_icon.png" alt="ramda icon" />
              </a>
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
                <Typography variant="display1" style={{ color: 'white' }}>
                  Git
                </Typography>
              }
            >
              <a href="https://git-scm.com/" target="_blank">
                <img src="/images/git_icon.png" alt="git icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  Yarn
                </Typography>
              }
            >
              <a href="https://yarnpkg.com/en/" target="_blank">
                <img src="/images/yarn_icon.png" alt="yarn icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  npm
                </Typography>
              }
            >
              <a href="https://www.npmjs.com/" target="_blank">
                <img src="/images/npm_icon.png" alt="npm icon" />
              </a>
            </Tooltip>
          </div>
          <div className="box-t">
            <Tooltip
              placement="top"
              title={
                <Typography variant="display1" style={{ color: 'white' }}>
                  Visual Studio Code
                </Typography>
              }
            >
              <a href="https://code.visualstudio.com/" target="_blank">
                <img src="/images/vscode_icon.png" alt="heroku icon" />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTools
