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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
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
        <Link>Why We Traded The City for the Farm</Link>
        </Box>
        <Box>
        <Link>Our Favorite Days on the Farm Look Like This</Link>
        </Box>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>

</div>
);
    }


  export default PopularArticles;