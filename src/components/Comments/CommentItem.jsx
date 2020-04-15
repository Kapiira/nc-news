import React from 'react';
import * as api from '../../utils/api';
import Voter from '../Voter';

function CommentItem({ comment, username, setComments }) {
  const deleteComment = (comment_id) => {
    api.deleteComment(comment_id).then(() => {
      setComments((prevState) => {
        return prevState.filter((comment) => comment.comment_id !== comment_id);
      });
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
          className="commentButton bg-red"
          onClick={() => {
            deleteComment(comment.comment_id);
          }}
        >
          Delete comment
        </button>
      )}
    </li>
  );
}

export default CommentItem;
