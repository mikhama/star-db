import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ onServiceChange }) => (
  <nav className="navbar navbar-expand navbar-dark bg-primary header">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <i className="fa fa-star-o" aria-hidden="true" />
        {' '}
        Database
      </Link>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/people/">
            <i className="fa fa-users" aria-hidden="true" />
            {' '}
            People
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/planets/">
            <i className="fa fa-globe" aria-hidden="true" />
            {' '}
            Planets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/starships/">
            <i className="fa fa-ship" aria-hidden="true" />
            {' '}
            Starships
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/secret">
            Secret
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">
            Login
          </NavLink>
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
