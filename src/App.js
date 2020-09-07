import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import MyApp from './MyApp';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Main from './components/Main';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/Navbar.js';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import PopularArticles from './components/PopularArticles';
import MainContentGrid from './components/MainContentGrid';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(12),
  },
  sidebarGrid:{
    display: 'flex',
    justifyContent: 'flex-end'
  }

}));

const sections = [
  { title: 'Farm Life', url: '#' },
  { title: 'Farming Basics', url: '#' },
  { title: 'Livestock', url: '#' },
  { title: 'Seasonal Crops', url: '#' },
  { title: 'Farm Equipment', url: '#' },
];


  const posts = [];

  const sidebar = {
    title: 'About',
    description:
      'We are an amazing company with equally amazing values!',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 2019', url: '#' },
      { title: 'September 2019', url: '#' },
      { title: 'August 2019', url: '#' },
      { title: 'July 2019', url: '#' },
      { title: 'June 2019', url: '#' },
      { title: 'May 2019', url: '#' },
      { title: 'April 2019', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };


function App() {
  const classes = useStyles();
  return (
    <ScopedCssBaseline>
    <div className="App">
    <Container maxWidth="lg">
        <Navbar title="Blog" sections={sections} />
        <main>
        <Grid container spacing={4}>
             <MainContentGrid />
        </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} >
            <Typography variant="h3">
            Reader's Choice
            </Typography>
            </Grid>

            <Grid item xs={6} >
              <PopularArticles/>
            </Grid>

            <Grid item xs={6} className={classes.sidebarGrid}>
            <Sidebar className={classes.sidebar}
                float='right'
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </Grid>

        </main>
      </Container>
      <Footer />
        <MyApp/>
    </div>
    </ScopedCssBaseline>


  );

}

export default App;




// const currentArticles = [
  //   {
  //     title: 'Featured post',
  //     date: 'Nov 12',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //       image: '../src/img/chicken.png',
  //     imageText: 'Image Text',
  //   },
  //   {
  //     title: 'Post title',
  //     date: 'Nov 11',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //       image: '../src/img/cow.png',
  //     imageText: 'Image Text',
  //   },
  //   {
  //     title: 'Featured post',
  //     date: 'Nov 12',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //       image: '../src/img/eggplant.png',
  //     imageText: 'Image Text',
  //   },
  //   {
  //     title: 'Post title',
  //     date: 'Nov 11',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //       image: '../img/farm.png',
  //     imageText: 'Image Text',
  //   },
  //   {
  //     title: 'Post title',
  //     date: 'Nov 11',
  //     description:
  //       'This is a wider card with supporting text below as a natural lead-in to additional content.',
  //       image: '../src/img/goat.png',
  //     imageText: 'Image Text',
  //   },
  // ];


