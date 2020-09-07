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
        backgroundColor: theme.palette.background.paper,
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
          <Link>Husband of Marge; father of Bart, Lisa, and Maggie.</Link>
        </TabPanel>
        <TabPanel>
          <Link>Wife of Homer; mother of Bart, Lisa, and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</Link>

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
          <Link>Husband of Marge; father of Bart, Lisa, and Maggie.</Link>
        </TabPanel>
        <TabPanel>
          <Link>Wife of Homer; mother of Bart, Lisa, and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</Link>

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
          <Link>Husband of Marge; father of Bart, Lisa, and Maggie.</Link>
        </TabPanel>
        <TabPanel>
          <Link>Wife of Homer; mother of Bart, Lisa, and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</Link>

        </TabPanel>
        <TabPanel>
          <Link>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</Link>

        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>

</div>
);
    }


  export default PopularArticles;