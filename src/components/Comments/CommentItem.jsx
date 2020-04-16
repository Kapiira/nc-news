import React, { useState } from 'react';
import * as api from '../../utils/api';
import Voter from '../Voter';
import Loading from '../Loading';

function CommentItem({ comment, username, setComments }) {
  const [isLoading, setIsLoading] = useState(false);

  const deleteComment = (comment_id) => {
    setIsLoading(true);
    api.deleteComment(comment_id).then(() => {
      setComments((prevState) => {
        return prevState.filter((comment) => comment.comment_id !== comment_id);
      });
      setIsLoading(false);
    });
  };
  return (
    <li>
      <p>{comment.body}</p>
      <p>Created at: {comment.created_at}</p>
      Votes:{' '}
      <Voter
        type="comments"
        startingVotes={comment.votes}
        item_id={comment.comment_id}
      />
      <p>Author: {comment.author}</p>
      {comment.author === username && (
        <button
          disabled={isLoading}
          className="commentButton bg-red smaller-right"
          onClick={() => {
            deleteComment(comment.comment_id);
          }}
        >
          {isLoading ? <Loading buttonLoading={true} /> : 'Delete Comment'}
        </button>
      )}
    </li>
  );
}

export default CommentItem;
