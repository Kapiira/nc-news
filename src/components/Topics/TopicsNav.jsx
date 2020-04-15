import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import * as api from '../../utils/api';

function TopicsNav() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    api.getTopics().then((topics) => setTopics(topics));
  }, []);

  return (
    <ul className="topicNav">
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
