import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({

    archives:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > *': {
          margin: theme.spacing(15),
          width: theme.spacing(2),
          height: theme.spacing(2),
          fontSize: 30,
      },
    }

}));


const Archives = () => {
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();

    return(
        <React.Component>


    <Divider variant="middle" />
      <Typography variant="h1" className={classes.archives}>
        Want More?
      </Typography>
      <Typography variant="h5" className={classes.moreContent}>
        Check out these links for Texas Fresh farm memories!
      </Typography>
      <Typography className={classes.archives}>
        <Link href="#" onClick={preventDefault}color="inherit">
          2017
        </Link>
        <Link href="#" onClick={preventDefault} color="inherit">
          2018
        </Link>
        <Link href="#" onClick={preventDefault} color="inherit">
          2019
        </Link>
    </Typography>

    <Divider variant="middle" />



        </React.Component>
    );

}

export default Archives;