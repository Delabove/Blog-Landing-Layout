import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Image from '../img/F.png';


const useStyles = makeStyles((theme) => ({

    hero: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
      height: "800px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
    }
}));

const Header = () => {
    const classes = useStyles();



    return (

    <Box className={classes.hero} ></Box>

    )
}

export default Header;