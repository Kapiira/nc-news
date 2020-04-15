import React from 'react';
import { Router } from '@reach/router';
import TopicsNav from './TopicsNav';
import Articles from '../Articles/Articles';

function Topics() {
  return (
    <div className="topicsMain">
      <div className="topicsNav">
        <TopicsNav />
      </div>
      <div className="topicArticles">
        <Router primary={false}>
          <Articles path=":topic_slug" />
        </Router>
      </div>
    </div>
  );
}

export default Topics;
