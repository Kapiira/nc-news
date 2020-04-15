import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import Comments from '../Comments/Comments';
import Loading from '../Loading';
import Voter from '../Voter';

function Article({ article_id }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    api.getArticle(article_id).then((newArticle) => {
      setArticle(newArticle);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) return <Loading />;
  return (
    <div className="article">
      <h1>{article.title}</h1>
      <div>
        <p>{article.body}</p>
        <p>
          Written by: <strong>{article.author}</strong> on{' '}
          <strong>{article.created_at}</strong>
        </p>
        Votes:{' '}
        <Voter
          type="articles"
          item_id={article_id}
          startingVotes={article.votes}
        />
      </div>
      <Comments article_id={article_id} />
    </div>
  );
}

export default Article;
