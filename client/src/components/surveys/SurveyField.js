import React from 'react';

export default ({ input, label }) => (
  <div>
    <label>{label}</label>
    <input {...input} />
  </div>
);
