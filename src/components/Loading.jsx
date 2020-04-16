import React from 'react';

function Loading({ buttonLoading }) {
  if (buttonLoading) {
    return <i className="fad fa-spinner-third fa-spin"></i>;
  }
  return (
    <div className="loader">
      <i className="fad fa-spinner-third fa-spin"></i>
    </div>
  );
}

export default Loading;
