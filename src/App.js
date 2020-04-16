import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import Articles from './components/Articles/Articles';
import Topics from './components/Topics/Topics';
import Article from './components/Articles/Article';
import { UserContext } from './store/user';

function App() {
  return (
    <UserContext.Provider value="jessjelly">
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Articles path="/" className="mainArticle" />
          <Article path="/articles/:article_id" />
          <Topics path="/topics/*" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
