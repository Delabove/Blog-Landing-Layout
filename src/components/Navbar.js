import React from 'react';
import Logo from '../img/logo.png'
import { makeStyles } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar,
  Toolbar,
  InputBase,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Link,
  Typography,
  Box
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

  appBar:{
    height: 100,
    backgroundColor: "#fff",
    margin: '0',
  },
  logoContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    height: 200,
    width: 250,
    marginTop: theme.spacing(16),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#EEFFD6',
    borderRadius: '50%',
    overflow: 'visible',
    position: "center",
    // paddingLeft: theme.spacing(.8),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLinks: {
    marginLeft: theme.spacing(2)
  },
  eyebrow: {

  }
}));

const Navbar = () => {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return(

    <Box component='nav'>
      <AppBar className={classes.appBar} style={{ margin: 0 }}>
          <Toolbar>

          <Box>
          <Typography>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
              Link1
            </Link>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
              Link2
            </Link>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
            Link3
            </Link>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
              Link4
            </Link>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
              Link5
            </Link>
          </Typography>
          </Box>
          <Box className={classes.logoContainer} style={{flexGrow : 863}}>
            <img  className={classes.logo} src={Logo} alt=""/>
          </Box>
          <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box className={classes.eyebrow} style={{flexGrow : 1}}>
            <Link href="#" onClick={preventDefault} className={classes.navLinks}>
              eyebrow1
              </Link>
              <Link href="#" onClick={preventDefault} className={classes.navLinks}>
                eyebrow2
              </Link>
              <Link href="#" onClick={preventDefault} className={classes.navLinks}>
                eyebrow3
              </Link>
        </Box>

          </Toolbar>
      </AppBar>
    </Box>

  );
}


export default Navbar;









