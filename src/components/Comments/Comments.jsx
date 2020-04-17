import React, { useState, useEffect, useContext } from 'react';
import * as api from '../../utils/api';
import Loading from '../Loading';
import CommentItem from './CommentItem';
import WriteComment from './WriteComment';
import { UserContext } from '../../store/user';
import Errors from '../Errors';
import { dateFormatting } from '../../utils/formatting';

function Comments({ article_id }) {
  const username = useContext(UserContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const toggleShowComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      api
        .getComments(article_id)
        .then((newComments) => {
          const formattedComments = dateFormatting(newComments, 'created_at');
          setComments(formattedComments);
          setIsLoading(false);
        })
        .catch((err) => {
          const { data, status } = err.response;
          setErr({ status: status, msg: data.message });
          setIsLoading(false);
        });
    }
  }, [article_id, showComments]);

  if (!showComments) {
    return (
      <button className="commentButton" onClick={toggleShowComments}>
        {isLoading ? <Loading buttonLoading={true} /> : 'Show Comments'}
      </button>
    );
  }
  if (err !== null) {
    const { status, msg } = err;
    return <Errors status={status} msg={msg} />;
  }
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
