import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { UserContext } from '../store/user';

function Header() {
  const user = useContext(UserContext);
  return (
    <header>
      <Link to="/">NC News</Link>

      <div className="loggedIn">
        Logged in as: <strong>{user}</strong>
      </div>
    </header>
  );
}

export default Header;
