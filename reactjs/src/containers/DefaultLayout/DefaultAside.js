import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // eslint-disable-next-line
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        Aside
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
