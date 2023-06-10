import React from 'react';
import { FiBell, FiHome, FiDollarSign, FiCalendar, FiUser, FiSettings, FiHelpCircle, FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Box from './Box';
import './DashBoard.css';

function Dashboard() {
  return (
    <div className="app">
      <div className="left-section">
        <div className="top-section">
          <h1 className="main-heading">Board.</h1>
          <NavLink to="/dashboard" className="menu-item dashboard" activeClassName="active">
            <FiHome className="icon" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="/transactions" className="menu-item" activeClassName="active">  
            <FiDollarSign className="icon" />
            <p>Transactions</p>
          </NavLink>
          <NavLink to="/schedules" className="menu-item" activeClassName="active">  
            <FiCalendar className="icon" />
            <p>Schedules</p>
          </NavLink>
          <NavLink to="/user" className="menu-item" activeClassName="active">  
            <FiUser className="icon" />
            <p>User</p>
          </NavLink>
          <NavLink to="/settings" className="menu-item" activeClassName="active"> 
          <FiSettings className="icon" />
            <p>Settings</p>
          </NavLink>
        </div>
        <div className="bottom-section">
          <NavLink to="/help" className="menu-item" activeClassName="active"> 
            <FiHelpCircle className="icon" />
            <p>Help</p>
          </NavLink>
          <NavLink to="/contact" className="menu-item" activeClassName="active">  {/* Add NavLink */}
            <FiPhone className="icon" />
            <p>Contact Us</p>
          </NavLink>
        </div>
      </div>
      <div className="header">
        <div className="header-left">
          <h1 className="header-heading">Dashboard</h1>
        </div>
        <div className="header-right">
          <input className="search-field" type="text" placeholder="Search..." />
          <FiBell size={30} />
          <img
            className="profile-image"
            src=""
            alt="Profile"
          />
        </div>
      </div>
      <Box /> {/* Box component is inserted here */}
    </div>
  );
}

export default Dashboard;
