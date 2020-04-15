import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import Comments from '../Comments/Comments';
import Loading from '../Loading';
import WriteComment from '../Comments/WriteComment';

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
        <p>
          Votes: <strong>{article.votes}</strong>
        </p>
      </div>
      <WriteComment article_id={article_id} />
      <Comments article_id={article_id} />
    </div>
  );
}

export default Article;
