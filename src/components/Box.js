import React from 'react';
import { FiDollarSign, FiHash, FiThumbsUp, FiUser } from 'react-icons/fi';
import './Box.css';

function Box() {
  return (
    <div className="content">
      <div className="info-box info-box-1">
        <FiDollarSign className="icon" />
        <p>Total Revenues</p>
        <h2>$ 21,343</h2>
      </div>
      <div className="info-box info-box-2">
        <FiHash className="icon" />
        <p>Total Transactions</p>
        <h2>1,520</h2>
      </div>
      <div className="info-box info-box-3">
        <FiThumbsUp className="icon" />
        <p>Total Likes</p>
        <h2>9,721</h2>
      </div>
      <div className="info-box info-box-4">
        <FiUser className="icon" />
        <p>Total Users</p>
        <h2>892</h2>
      </div>
    </div>
  );
}

export default Box;
