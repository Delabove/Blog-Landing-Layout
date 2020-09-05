import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MostViews from './MostViews'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({

    tabs: {
        marginBottom: 150,
        marginTop: 150,
    },

}));


function PopularArticles({posts}){
    const classes = useStyles();


// const handleChange = (event, newValue) => {
//     setPosts(newValue);
//     };
// const preventDefault = (event) => event.preventDefault();

    return(

     posts.map(post => {
         return <MostViews mostViews = {post} />
     })





    );

}

export default PopularArticles;




    //     <React.Component>
    // <Typography variant="h1" className={classes.bestList}>
    // Most Popular
    // </Typography>


    //     <Paper className={classes.tabs}>
    //     <Tabs
    //     value={posts}
    //     // onChange={handleChange}
    //     indicatorColor="primary"
    //     textColor="primary"
    //     centered
    //     >
    //     <Tab className={classes.tab1} label="Most Viewed" />
    //         <div>{posts} </div>
    //     <Tab  className={classes.tab2} label="Most Commented" />
    //     <Tab  className={classes.tab3} label="Most Shared" />
    //     </Tabs>
    //     </Paper>
    //     </React.Component>