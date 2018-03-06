import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return true;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

Header.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.any]).isRequired,
};

export default connect(mapStateToProps)(Header);
