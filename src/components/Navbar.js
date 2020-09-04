import React from 'react';
import Logo from '../img/logo.png';
import { makeStyles } from "@material-ui/core"
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

  appBar:{
    backgroundColor: "#fff",
    margin: '0',
  },

  logo:{
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    position: "center",
  },
}));

const Navbar = () => {

  const classes = useStyles();

  return(

    <Box component='nav'>
      <AppBar className={classes.appBar} style={{ margin: 0 }}>
          <Toolbar>
            <img className={classes.logo} src={Logo} alt="Logo" />
          </Toolbar>
      </AppBar>
    </Box>

  );
}


export default Navbar;









