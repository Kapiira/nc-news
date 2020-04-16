import React from 'react';

function Errors({ status, msg, inline }) {
  if (inline === true) {
    return (
      <div className="invalid">
        {status && `${status}:`} {msg}
      </div>
    );
  }
  return (
    <div className="article">
      <h1>{status} ERROR</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default Errors;
