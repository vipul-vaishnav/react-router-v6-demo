import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const UserDashboard = ({ name, age }) => {
  const navigate = useNavigate();
  const active_styles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'green' : 'black',
      color: isActive ? 'white' : 'red',
    };
  };
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div>
        <nav className="nested-nav">
          <NavLink to="name" style={active_styles}>
            Name
          </NavLink>
          <NavLink to="age" style={active_styles}>
            Age
          </NavLink>
          <NavLink to="email" style={active_styles}>
            Email
          </NavLink>
          <NavLink to="phone" style={active_styles}>
            Phone
          </NavLink>
        </nav>
      </div>
      <Outlet />
      <button onClick={() => navigate('/')}>{'<-'} Back</button>
    </div>
  );
};

export default UserDashboard;
