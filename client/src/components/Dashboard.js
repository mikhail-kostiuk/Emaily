import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => (
  <div style={{ position: 'relative', minHeight: '200px' }}>
    <SurveyList />
    <div className="fixed-action-btn" style={{ position: 'fixed', bottom: '10', right: '10' }}>
      <Link to="/surveys/new" className="btn-floating btn-large red">
        <i className="material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
