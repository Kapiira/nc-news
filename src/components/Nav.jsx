import React from 'react';
import { Link } from '@reach/router';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>

        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
