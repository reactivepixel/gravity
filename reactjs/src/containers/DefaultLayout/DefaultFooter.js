import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // eslint-disable-next-line
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a href="/#/dashboard">Gravity</a>
          {' '}
          &copy; 2019 Apextion, LLC.
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
