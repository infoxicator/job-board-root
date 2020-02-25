import React from 'react';
import { Link } from '@americanexpress/one-app-router';

const NavBar = ({ loggedIn, onLogout }) => {
  if (loggedIn) {
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/jobs/new">Post Job</Link>
          <a className="navbar-item" onClick={onLogout}>Logout</a>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/candidates">Candidates</Link>
        <Link className="navbar-item" to="/companies">Companies</Link>
        <Link className="navbar-item" to="/chat">Chat</Link>
        <Link className="navbar-item" to="/login">Login</Link>
      </div>
    </nav>
  );
};
export default NavBar;
