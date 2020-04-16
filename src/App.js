import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Router } from '@reach/router';
import Articles from './components/Articles/Articles';
import Topics from './components/Topics/Topics';
import Article from './components/Articles/Article';
import { UserContext } from './store/user';
import Errors from './components/Errors';

function App() {
  return (
    <UserContext.Provider value="tickle122">
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Articles path="/" className="mainArticle" />
          <Article path="/articles/:article_id" />
          <Topics path="/topics/*" />
          <Errors default status={404} msg="Page Not Found" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
