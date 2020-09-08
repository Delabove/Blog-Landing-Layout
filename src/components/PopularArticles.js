import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

      },
      blogTitle:{
          marginBottom: theme.spacing(5)
      }

    }));


function PopularArticles() {
const classes = useStyles();
    return(

 <div className={classes.root}>
    <Typography variant="h2" className={classes.blogTitle} spacing={5}
    display="flex"
    justifyContent="start">
           Reader's Choice
    </Typography>
    <Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      <Tab>Fave Reads</Tab>
      <Tab>Most Talked About</Tab>
      <Tab>Sharables</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Farm Life</Tab>
          <Tab>Farm Basics</Tab>
          <Tab>Livestock</Tab>
          <Tab>Seasonal Crops</Tab>
          <Tab>Farm Equipment</Tab>
        </TabList>
        <TabPanel>
        <Box>
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Grain Bin Safety</Link>
        </Box>
        <Box>
        <Link>Soil pH</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Which Livestock is Most Profitable</Link>
        </Box>
        <Box>
        <Link>The Most Common Livestock For Your Farm</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Essential Equipment for Small Farms</Link>
        </Box>
        <Box>
        <Link>Rotary Tillers: Why They Are Necessary</Link>
        </Box>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Farm Life</Tab>
          <Tab>Farm Basics</Tab>
          <Tab>Livestock</Tab>
          <Tab>Seasonal Crops</Tab>
          <Tab>Farm Equipment</Tab>
        </TabList>
        <TabPanel>
        <Box>
        <Link>A Day On The Farm</Link>
        </Box>
        <Box>
        <Link>My Favorite Season On The Farm</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>How much water do farmers manage</Link>
        </Box>
        <Box>
        <Link>Nutrient Availability</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>The Easiest Livestock To Begin Farming</Link>
        </Box>
        <Box>
        <Link>The Healthiest Livestock To Raise For The Fridge</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Must Have Blades To Have On Hand At All Times</Link>
        </Box>
        <Box>
        <Link>Lawn Care Equipment</Link>
        </Box>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Farm Life</Tab>
          <Tab>Farm Basics</Tab>
          <Tab>Livestock</Tab>
          <Tab>Seasonal Crops</Tab>
          <Tab>Farm Equipment</Tab>
        </TabList>
        <TabPanel>
        <Box>
        <Link>How We Started Farming</Link>
        </Box>
        <Box>
        <Link>The Main Reason I Love Farm Life</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Grass Waterways</Link>
        </Box>
        <Box>
        <Link>How Farmers Pick Their Planting Population</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Livestock: For Use or For Pleasure?</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>Dairy Cattle: The Good and The Bad</Link>
        </Box>
        <Box>
        <Link>The Processing of Home Grown Meat</Link>
        </Box>
        </TabPanel>
        <TabPanel>
        <Box>
        <Link>The Tractor I Can't Live Without</Link>
        </Box>
        <Box>
        <Link>My Favorite Old Pickup Truck</Link>
        </Box>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>

</div>
);
    }


  export default PopularArticles;