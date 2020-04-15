import React from 'react';

function CommentItem({ comment }) {
  return (
    <li>
      <p>{comment.body}</p>
      <p>Created at: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
      <p>Author: {comment.author}</p>
    </li>
  );
}

export default CommentItem;
