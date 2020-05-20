import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary header">
    <div className="container">
      <a className="navbar-brand" href="./">
        <i className="fa fa-star-o" aria-hidden="true" />
        {' '}
        Database
      </a>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="./">
            <i className="fa fa-users" aria-hidden="true" />
            {' '}
            People
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">
            <i className="fa fa-globe" aria-hidden="true" />
            {' '}
            Planets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">
            <i className="fa fa-ship" aria-hidden="true" />
            {' '}
            Starships
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
