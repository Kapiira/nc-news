import React, { useState } from 'react';
import * as api from '../utils/api';

function Voter({ item_id, type, startingVotes }) {
  const [votes, setVotes] = useState(startingVotes);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disbaleDownVote, setDisableDownVote] = useState(false);

  const incVote = (amount) => {
    if (amount > 0) setDisableUpVote(true);
    else setDisableDownVote(true);
    setVotes((prevState) => prevState + amount);
    api.patchVote(type, item_id, amount);
  };

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
