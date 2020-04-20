import React, { useEffect, useState } from 'react';
import * as api from '../../utils/api';
import ArticleItem from './ArticleItem';
import SortBy from '../SortBy';
import Loading from '../Loading';
import Errors from '../Errors';
import { dateFormatting } from '../../utils/formatting';

function Articles({ topic_slug, className }) {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const queries = {
      topic: topic_slug,
      sort_by: sortBy,
    };
    api
      .getArticles(queries)
      .then((data) => {
        const articles = dateFormatting(data.articles, 'created_at');
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        const { data, status } = err.response;
        setErr({ status: status, msg: data.message });
        setIsLoading(false);
      });
  }, [topic_slug, sortBy]);

  if (err !== null) {
    const { status, msg } = err;
    return <Errors status={status} msg={msg} />;
  }

  return (
    <div className={className}>
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="articles">
          {articles.map((article, i) => {
            return <ArticleItem key={i} article={article} showTopic={true} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default Articles;
