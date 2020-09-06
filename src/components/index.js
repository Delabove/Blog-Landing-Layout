import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Sidebar from '../components/SideBar';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import CssBaseline from '@material-ui/core/CssBaseline';


const Home = () => {

//   const featuredPosts = [
//     {
//       title: 'Featured post',
//       date: 'Nov 12',
//       description:
//         'This is a wider card with supporting text below as a natural lead-in to additional content.',
//      //image here
//       imageText: 'Image Text',
//     },
//     {
//       title: 'Post title',
//       date: 'Nov 11',
//       description:
//         'This is a wider card with supporting text below as a natural lead-in to additional content.',
//      //image here
//       imageText: 'Image Text',
//     },
//   ];

//   const posts = [post1, post2, post3];

  const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

        return(
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Navbar title="Blog" />
              <main>
                  <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                  />
              </main>
            </Container>
            {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
          </React.Fragment>

);
}
export default Home;