import React from 'react'
import {Link} from 'react-router'

const NavBar = () => {
  return (
    <div>
      <ul className="flex flex-row gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar