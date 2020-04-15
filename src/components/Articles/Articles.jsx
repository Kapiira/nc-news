import React, { useEffect, useState } from 'react';
import * as api from '../../utils/api';
import ArticleItem from './ArticleItem';
import SortBy from '../SortBy';
import Loading from '../Loading';

function Articles({ topic_slug, className }) {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const queries = {
      topic: topic_slug,
      sort_by: sortBy,
    };
    api.getArticles(queries).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topic_slug, sortBy]);
  if (isLoading) return <h1>Loading...</h1>;
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
