import React, { useEffect } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import Articles from './components/Articles/Articles';
import Topics from './components/Topics/Topics';
import Article from './components/Articles/Article';

function App() {
  useEffect(() => {
    localStorage.setItem('username', 'jessjelly');
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Articles path="/" className="mainArticle" />
        <Article path="/articles/:article_id" />
        <Topics path="/topics/*" />
      </Router>
    </div>
  );
}

export default App;
