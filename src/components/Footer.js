import React from 'react';
import { makeStyles } from "@material-ui/core"
import {
Typography,
Box,
BottomNavigation
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

    bottomNav:{
        backgroundColor: "#000",
        paddingTop: theme.spacing(10),
      },

      copyright:{
        color: '#fff',
        height: '300',
        fontSize: 20,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start'
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










