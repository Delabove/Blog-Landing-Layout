import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1558981852-426c622a060?ixlib=rb-1.2.1&ixid=ejJhcHBfaWQiOjEyMDd9&w=10000&q=80')`
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
    <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>

      <Box>
        <Box className={classes.hero}> React Blog w/ Hero Image</Box>
      </Box>
    </div>
  );
}

export default App;
