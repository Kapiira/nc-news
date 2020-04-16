import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import * as api from '../../utils/api';
import Errors from '../Errors';

function TopicsNav() {
  const [topics, setTopics] = useState([]);
  const [err, setErr] = useState(null);
  useEffect(() => {
    api
      .getTopics()
      .then((topics) => setTopics(topics))
      .catch((err) => {
        const { data, status } = err.response;
        setErr({ status: status, msg: data.message });
      });
  }, []);

  if (err !== null) {
    const { status, msg } = err;
    return <Errors status={status} msg={msg} />;
  }
  return (
    <ul className="topicNav">
      <li>Topics</li>
      {topics.map(({ slug }, i) => {
        return (
          <li key={i}>
            <Link to={`${slug}`}>{slug}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default TopicsNav;
