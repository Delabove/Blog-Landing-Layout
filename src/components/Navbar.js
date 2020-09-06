
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {/* {title} */}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {/* {sections.map((section) => ( */}
          <Link
            color="inherit"
            noWrap
            // key={section.title}
            variant="body2"
            // href={section.url}
            className={classes.toolbarLink}
          >
            {/* {section.title} */}
          </Link>

      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
















// import React from 'react';
// import Logo from '../img/logo.png'
// import { makeStyles } from "@material-ui/core";
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import SearchIcon from '@material-ui/icons/Search';
// import {
//   AppBar,
//   Toolbar,
//   InputBase,
//   ListItem,
//   IconButton,
//   ListItemText,
//   Avatar,
//   Divider,
//   List,
//   Link,
//   Typography,
//   Box
// } from "@material-ui/core"

// const useStyles = makeStyles((theme) => ({

//   appBar:{
//     height: 100,
//     backgroundColor: "#fff",
//     margin: '0',
//   },
//   logo:{
//     maxWidth: '50%',
//     maxHeigth: '50%',
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   navLinks: {
//     marginLeft: theme.spacing(2)
//   },
//   eyebrow: {

//   }
// }));

// const Navbar = () => {

//   const classes = useStyles();
//   const preventDefault = (event) => event.preventDefault();

//   return(

//     <Box component='nav'>
//       <AppBar className={classes.appBar} style={{ margin: 0 }}>
//       {/* <img  className={classes.logo} src={Logo} alt=""/> */}
//           <Toolbar>

//           <Box
//           display="flex"
//           justifyContent='center'
//           alignItems='center'>
//           <Typography>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//               Link1
//             </Link>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//               Link2
//             </Link>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//             Link3
//             </Link>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//               Link4
//             </Link>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//               Link5
//             </Link>
//           </Typography>
//           </Box>
//           <Box className={classes.search}>
//             <Box className={classes.searchIcon}>
//               <SearchIcon />
//             </Box>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Box>
//           <Box className={classes.eyebrow} style={{flexGrow : 1}}>
//             <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//               eyebrow1
//               </Link>
//               <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//                 eyebrow2
//               </Link>
//               <Link href="#" onClick={preventDefault} className={classes.navLinks}>
//                 eyebrow3
//               </Link>
//         </Box>

//           </Toolbar>
//       </AppBar>
//     </Box>

//   );
// }


// export default Navbar;









