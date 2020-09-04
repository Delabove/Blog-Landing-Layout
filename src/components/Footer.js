import React from 'react';
import { makeStyles } from "@material-ui/core";
import {
Typography,
Box,
BottomNavigation
} from "@material-ui/core"



//NOT SHOWING UP ON PAGE

const useStyles = makeStyles((theme) => ({

    bottomNav:{
      // width: 20,
        height: 105,
        backgroundColor: "#000",
        paddingTop: theme.spacing(10),
        display: 'flex',
        justifyContent: 'start',
        // alignItems: 'end'
      },
      copyright:{
        color: '#fff',
        fontSize: 20,
      }

}));

const Footer= () => {

  const classes = useStyles();

  return(

    <Box component='footer'>
    <BottomNavigation className={classes.bottomNav}>
        <Typography className={classes.copyright}>
            ©2020 Texas Fresh
        </Typography>
    </BottomNavigation>
    </Box>
  );
}

export default Footer;










