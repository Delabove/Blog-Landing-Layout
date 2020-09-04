import React from 'react';
// import Logo from '../img/logo.png';
import { makeStyles } from "@material-ui/core";
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  }
}));

const Navbar = () => {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return(

    <Box component='nav'>
      <AppBar className={classes.appBar} style={{ margin: 0 }}>
          <Toolbar>
            {/* <img className={classes.logo} src={Logo} alt="Logo" /> */}
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Typography className={classes.root}>
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
          </Toolbar>
      </AppBar>
    </Box>

  );
}


export default Navbar;









