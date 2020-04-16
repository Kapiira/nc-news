import React, { useState, useContext } from 'react';
import * as api from '../../utils/api';
import Loading from '../Loading';
import { UserContext } from '../../store/user';
import Errors from '../Errors';

function WriteComment({ article_id, setComments }) {
  const username = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validInput, setValidInput] = useState(null);
  const [err, setErr] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
    if (value.length === 0) setValidInput(false);
    else setValidInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    if (validInput === true) {
      setIsLoading(true);
      api
        .postComment(article_id, username, comment)
        .then((newComment) => {
          setComments((prevState) => {
            const copiedState = [...prevState];
            copiedState.unshift(newComment);
            return copiedState;
          });
          setComment('');
          setIsLoading(false);
          setValidInput(null);
        })
        .catch((err) => {
          const { data, status } = err.response;
          setErr({ status: status, msg: data.message });
          setIsLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write a Comment:{' '}
        <textarea
          name="body"
          onChange={handleChange}
          value={comment}
          className={validInput === false ? 'invalidTextarea' : ''}
        />
      </label>
      {validInput === false && (
        <Errors msg="You need to write something..." inline={true} />
      )}
      <button className="commentButton" disabled={!validInput || isLoading}>
        {isLoading ? <Loading buttonLoading={true} /> : 'Add Comment'}
      </button>
      {err !== null && (
        <Errors status={err.status} msg={err.msg} inline={true} />
      )}
    </form>
  );
}

export default WriteComment;
