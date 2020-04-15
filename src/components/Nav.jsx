import React from 'react';
import { Link } from '@reach/router';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Articles</Link>
        </li>

        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
