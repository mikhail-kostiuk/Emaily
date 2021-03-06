import React from 'react';
import PropTypes from 'prop-types';

const SurveyField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} style={{ marginBottom: '5px' }} />
    <div className="red-text" style={{ marginBottom: '20px' }}>
      {touched && error}
    </div>
  </div>
);

SurveyField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

export default SurveyField;
