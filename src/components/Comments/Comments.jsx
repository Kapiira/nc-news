import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import Loading from '../Loading';
import CommentItem from './CommentItem';
import WriteComment from './WriteComment';
const username = localStorage.getItem('username');

function Comments({ article_id }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      api.getComments(article_id).then((newComments) => {
        setComments(newComments);
        setIsLoading(false);
      });
    }
  }, [article_id, showComments]);

  if (!showComments) {
    return (
      <button className="commentButton" onClick={toggleShowComments}>
        Show Comments
      </button>
    );
  }
  if (isLoading) return <Loading />;
  return (
    <>
      <h2>Comments</h2>
      <WriteComment article_id={article_id} setComments={setComments} />
      <ul className="comments">
        {comments.map((comment, i) => {
          return (
            <CommentItem
              key={i}
              comment={comment}
              username={username}
              setComments={setComments}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Comments;
