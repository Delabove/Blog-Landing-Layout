
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

    root: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
}));

const MostShares = () => {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

return(

    <>
    <Typography className={classes.root}>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>
        <Link href="#" onClick={preventDefault}>
        <Typography>
       "So many Shares!"
        </Typography>
        </Link>

    </Typography>
</>
    )

}

export default MostShares;

