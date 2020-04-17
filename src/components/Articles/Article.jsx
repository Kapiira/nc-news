import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import Comments from '../Comments/Comments';
import Loading from '../Loading';
import Voter from '../Voter';
import Errors from '../Errors';
import { dateFormatting } from '../../utils/formatting';

function Article({ article_id }) {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    api
      .getArticle(article_id)
      .then((newArticle) => {
        const formattedArticle = dateFormatting([newArticle], 'created_at');
        setArticle(formattedArticle[0]);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        const { data, status } = err.response;
        setErr({ status: status, msg: data.message });
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) return <Loading />;
  if (err !== null) {
    const { status, msg } = err;
    return <Errors status={status} msg={msg} />;
  }
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
