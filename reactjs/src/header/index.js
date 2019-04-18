import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import styles from '../app.module.css';
import { AuthContainer } from '../containers';

class Header extends React.Component {
  logUserOut = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
          <h1>
            <Link to="/" className={styles.header__brand}>Decision Maker</Link>
          </h1>
          <div className={styles.links}>
            {loggedIn && (
            <React.Fragment>
              <Link to="/admin/questions" className={styles.header__link}>Dashboard</Link>
              <Link to="/admin/questions/new" className={styles.header__link}>Create a new question</Link>
              <button type="button" onClick={this.logUserOut} className={styles.header__link}>logout</button>
            </React.Fragment>
            )}

            {!loggedIn && (
            <Link to="/login" className={styles.header__link}>Login</Link>
            )}

          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  history: RRPropTypes.history.isRequired,
};

Header.defaultProps = {
  loggedIn: false,
};

// Apply Higher Order Component Wrapper
export default AuthContainer(Header);
