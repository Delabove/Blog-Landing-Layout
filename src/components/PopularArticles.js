import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MostViews from './MostViews';
import MostShares from './MostShares';
import MostComments from './MostComments';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    dropdown: {
        right: 0,
        left: 0,
        zIndex: 1,
        paddingLeft: theme.spacing(26),
      },

}));

const PopularArticles = () => {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };



    return(


<>

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

<Box className={classes.dropdown}>
    {selectedTab === 0 && <MostViews />}
    {selectedTab === 1 && <MostComments />}
    {selectedTab === 2 && <MostShares />}
</Box>
</>




    )

}

export default PopularArticles;

