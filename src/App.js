import React, { useState } from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import MyApp from './MyApp';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import CurrentArticles from '../src/components/CurrentArticles';
import PopularArticles from '../src/components/PopularArticles';
import Header from '../src/components/Header';
import NewsLetterForm from '../src/components/NewsletterForm';

function App() {

  const [posts, setPosts] = useState(['article1', 'article2', 'article3', 'article4', 'article5', 'article6', 'article7', 'article8', 'article9', 'article10']);

  return (
    <ScopedCssBaseline>
    <div className="App">
        <Navbar />
        <Header />
        <CurrentArticles />
        <PopularArticles posts={posts}/>
        <NewsLetterForm />
        <Footer />
        <MyApp/>
    </div>
    </ScopedCssBaseline>


  );

}

export default App;
