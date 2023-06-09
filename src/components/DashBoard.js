import React from 'react';
import { FiBell } from 'react-icons/fi';
import './DashBoard.css';

function Dashboard() {
  return (
    <div className="header">
      <div className="header-right">
        <img
          className="profile-image"
          src="profile-picture-url-here" 
          alt="profile"
        />
        <FiBell size={30} />
      </div>
      <input
        className="search-field"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Dashboard;
