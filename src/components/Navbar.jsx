import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const active_link_styles = {
    backgroundColor: 'rgb(93, 93, 252)',
    color: 'white',
  };

  const apply_active_classes = ({ isActive }) => {
    if (isActive) return active_link_styles;
    else return;
  };

  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Link to="/">Logo.</Link>
        </div>
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <NavLink to="/" style={apply_active_classes} className="header__navbar-link">
                Home
              </NavLink>
            </li>
            <li className="header__navbar-item">
              <NavLink to="/about" style={apply_active_classes} className="header__navbar-link">
                About
              </NavLink>
            </li>
            <li className="header__navbar-item">
              <NavLink to="/contact" style={apply_active_classes} className="header__navbar-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
