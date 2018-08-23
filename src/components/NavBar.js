import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const NavBar = props => {
  // const { classes } = props
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{
            display: 'flex',
            backgroundColor: '#e8f1f2'
          }}
        >
          <div
            className="row"
            style={{ width: '100%', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="display2"
                style={{
                  display: 'flex',
                  color: '#13293d'
                }}
              >
                Max Boettcher
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Button color="inherit">
                <Typography variant="display1" style={{ color: '#006494' }}>
                  ABOUT
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="display1" style={{ color: '#006494' }}>
                  TOOLS
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="display1" style={{ color: '#006494' }}>
                  PROJECTS
                </Typography>
              </Button>
              <Button color="inherit">
                <Typography variant="display1" style={{ color: '#006494' }}>
                  INFO
                </Typography>
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
