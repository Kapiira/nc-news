import React, { useState } from 'react';
import * as api from '../../utils/api';
import Loading from '../Loading';

function WriteComment({ article_id, setComments }) {
  //Add isLoading too
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    // Need to do validation here too
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const username = localStorage.getItem('username');
    api.postComment(article_id, username, comment).then((newComment) => {
      setComments((prevState) => {
        const copiedState = [...prevState];
        copiedState.unshift(newComment);
        return copiedState;
      });
      setComment('');
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write a Comment:{' '}
        <textarea name="body" onChange={handleChange} defaultValue={comment} />
      </label>
      <button className="commentButton" disabled={isLoading}>
        {isLoading ? <Loading buttonLoading={true} /> : 'Add Comment'}
      </button>
    </form>
  );
}

export default WriteComment;
