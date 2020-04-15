import React from 'react';
import { Link } from '@reach/router';

function ArticleItem({ article, showTopic }) {
  return (
    <li>
      <h2>
        <Link to={`/articles/${article.article_id}`} className="articleLink">
          {article.title}
        </Link>
      </h2>
      <p>Written By: {article.author}</p>
      {showTopic && <p>Topic: {article.topic}</p>}
      <p>Date: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
}

export default ArticleItem;
