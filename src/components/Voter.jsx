import React, { useState } from 'react';
import * as api from '../utils/api';
import Errors from './Errors';

function Voter({ item_id, type, startingVotes }) {
  const [votes, setVotes] = useState(startingVotes);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disbaleDownVote, setDisableDownVote] = useState(false);
  const [err, setErr] = useState(null);

  const incVote = (amount) => {
    if (amount > 0) setDisableUpVote(true);
    else setDisableDownVote(true);
    setVotes((prevState) => prevState + amount);
    api.patchVote(type, item_id, amount).catch((err) => {
      const { data, status } = err.response;
      setErr({ status: status, msg: data.message });
    });
  };
  if (err !== null) {
    const { status, msg } = err;
    return <Errors status={status} msg={msg} />;
  }
  return (
    <div className="voter">
      <button
        onClick={() => {
          incVote(1);
        }}
        disabled={disableUpVote}
      >
        <i className="fad fa-thumbs-up"></i>
      </button>
      {votes}
      <button
        onClick={() => {
          incVote(-1);
        }}
        disabled={disbaleDownVote}
      >
        <i className="fad fa-thumbs-down"></i>
      </button>
    </div>
  );
}

export default Voter;
