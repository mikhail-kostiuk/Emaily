import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      {console.log(formValues)}
      <button onClick={() => submitSurvey(formValues)} className="green white-text btn-flat right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

SurveyFormReview.propTypes = {
  onCancel: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    title: PropTypes.string,
    subject: PropTypes.string,
    body: PropTypes.string,
    emails: PropTypes.string,
  }).isRequired,
  submitSurvey: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
