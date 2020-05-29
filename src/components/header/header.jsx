import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ onServiceChange }) => (
  <nav className="navbar navbar-expand navbar-dark bg-primary header">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <i className="fa fa-star-o" aria-hidden="true" />
        {' '}
        Database
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/people">
            <i className="fa fa-users" aria-hidden="true" />
            {' '}
            People
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/planets">
            <i className="fa fa-globe" aria-hidden="true" />
            {' '}
            Planets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/starships">
            <i className="fa fa-ship" aria-hidden="true" />
            {' '}
            Starships
          </Link>
        </li>
      </ul>

      <button
        className="btn btn-danger btn-sm change-service-button"
        type="button"
        onClick={onServiceChange}
      >
        <i className="fa fa-superpowers" aria-hidden="true" />
      </button>
    </div>
  </nav>
);

Header.propTypes = {
  onServiceChange: PropTypes.func.isRequired,
};

export default Header;
