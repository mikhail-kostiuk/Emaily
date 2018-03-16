import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div style={{ position: 'relative', minHeight: '200px' }}>
    Dashboard
    <div className="fixed-action-btn" style={{ position: 'absolute', bottom: '0', right: '0' }}>
      <Link to="/surveys/new" className="btn-floating btn-large red">
        <i className="material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
