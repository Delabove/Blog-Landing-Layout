import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MostViews from './MostViews';
import MostShares from './MostShares';
import MostComments from './MostComments';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

    tabs: {
        marginBottom: 150,
        marginTop: 150,
    },

}));

const PopularArticles = () => {
    // const classes = useStyles();

    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };



    return(


<>
     <Grid
     display="flex"
     justifyContent="center"
     alignItems="center">



    <Box
    display="flex"
    justifyContent="center"
    alignItems="center">
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Favorite Reads" />
                <Tab label="Most Talked About"  />
                <Tab label="Most Shareable"  />
            </Tabs>

</Box>

<Box
    display="flex"
    justifyContent="center"
    alignItems="center">

    {selectedTab === 0 && <MostViews />}
    {selectedTab === 1 && <MostComments />}
    {selectedTab === 2 && <MostShares />}
</Box>
</Grid>
</>




    )

}

export default PopularArticles;

