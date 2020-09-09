import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import MyApp from './MyApp';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './components/Header';
import Navbar from './components/Navbar.js';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import PopularArticles from './components/PopularArticles';
import MainContentGrid from './components/MainContentGrid';
import NewsletterForm from './components/NewsletterForm';
import Hidden from '@material-ui/core/Hidden'



const useStyles = makeStyles((theme) => ({
  bottomGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(12),
  },

  sidebar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  archives: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));

const sections = [
  { title: 'Farm Life', url: '#' },
  { title: 'Farming Basics', url: '#' },
  { title: 'Livestock', url: '#' },
  { title: 'Seasonal Crops', url: '#' },
  { title: 'Farm Equipment', url: '#' },
];

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
        <Grid xs={12}
        >
          <Navbar title="" sections={sections} />
          <Header/>
          </Grid>
          <main>
              <MainContentGrid />
            <Grid container spacing={1} className={classes.bottomGrid}>
                <Grid item xs={12} md={6} className={classes.sidebarGrid}>
                <PopularArticles />
                </Grid>
                </Grid>
                <Grid container
                  display='flex'
                  justifyContent='center'
                  alignContent='center'>
                  <Grid item xs={12} md={8}  className={classes.sidebarGrid}>
                    <NewsletterForm />
                  </Grid>
                  <Hidden smDown>
                  <Grid item xs={12} md={4} className={classes.archives}>
                  <Sidebar className={classes.sidebar}
                      title={sidebar.title}
                      description={sidebar.description}
                      archives={sidebar.archives}
                      social={sidebar.social}
                    />
                    </Grid>
                    </Hidden>
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
