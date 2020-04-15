import React, { useState } from 'react';

function WriteComment({ article_id }) {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form>
      <label>
        Write a Comment:{' '}
        <textarea name="body" onChange={handleChange} defaultValue={comment} />
      </label>
      <button>Add Comment</button>
    </form>
  );
}

export default WriteComment;
