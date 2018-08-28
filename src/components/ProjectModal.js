import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

class ProjectModal extends React.Component {
  state = {
    open: false,
    scroll: 'paper'
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <Button disableRipple={true} onClick={this.handleClickOpen('paper')}>
          <div className="box-p">
            <img src="/images/drafty_home.png" alt="drafty home page" />
            <img src="/images/drafty_map.png" alt="draft map page" />
          </div>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          //   fullWidth={true}
          maxWidth="lg"
        >
          <DialogActions>
            <IconButton onClick={this.handleClose} color="primary">
              <CloseIcon />
            </IconButton>
          </DialogActions>
          <DialogContent className="row" style={{ justifyContent: 'center' }}>
            <div className="box-d">
              <img
                className="drafty-shot"
                src="/images/drafty_home.png"
                alt="drafty home page"
              />
              <img
                className="drafty-shot"
                src="/images/drafty_map.png"
                alt="draft map page"
              />
              <img
                className="drafty-shot"
                src="/images/drafty_brewery.png"
                alt="draft map page"
              />
              <img
                className="drafty-shot"
                src="/images/drafty_drawer.png"
                alt="draft map page"
              />
              <img
                className="drafty-shot"
                src="/images/drafty_favorites.png"
                alt="draft map page"
              />
            </div>
            <DialogContentText />
          </DialogContent>
          <DialogTitle id="scroll-dialog-title" style={{ alignSelf: 'center' }}>
            <Typography
              variant="display1"
              className="row"
              style={{
                color: '#13293d',
                maxWidth: '50%',
                marginBottom: 40,
                marginLeft: 60
              }}
            >
              Drafty is a React app that I built for my final project at JRS
              Coding School. The app is made for Charleston craft beer drinkers
              and it allows users to search for craft breweries close to their
              current location or to a given street address, using the Google
              Maps API. Brewery data is located in a database that I created in
              CouchDB. Users can also add breweries they like to their own
              favorites list, which is managed using the browser’s local
              storage.
            </Typography>
          </DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default ProjectModal
