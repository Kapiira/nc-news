import React, { useEffect } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import Home from './components/Home';
import Articles from './components/Articles/Articles';
import Topics from './components/Topics/Topics';
import Article from './components/Articles/Article';

function App() {
  useEffect(() => {
    localStorage.setItem('username', 'Kapiira');
    console.log('hej');
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Articles path="/articles" className="mainArticle" />
        <Article path="/articles/:article_id" />
        <Topics path="/topics/*" />
      </Router>
    </div>
  );
}

export default App;
