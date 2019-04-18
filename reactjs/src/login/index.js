import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import RRPropTypes from 'react-router-prop-types';
import styles from '../app.module.css';
import { AuthContainer } from '../containers';

class Login extends React.Component {
  componentDidMount() {
    const { location, verifySlackCode } = this.props;
    // get the query params from the url
    const params = new URLSearchParams(location.search);
    // get the code if there is one from slack
    const code = params.get('code');
    // if there is code verify it
    if (code) verifySlackCode(code);
  }

  redirectToSlack = () => {
    // create the slack url
    let SLACK_URL = 'https://slack.com/oauth/authorize?';
    SLACK_URL += `client_id=${process.env.REACT_APP_CLIENT_ID}`;
    SLACK_URL += '&scope=identity.basic,identity.email';
    SLACK_URL += `&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}`;
    window.location = SLACK_URL;
  }

  render() {
    const { loggedIn } = this.props;
    // if the user is already logged in redirect then to the admin page
    if (loggedIn) return <Redirect to="/admin/questions" />;

    return (
      <React.Fragment>
        <h1>Login</h1>
        <div>
          <button type="button" onClick={this.redirectToSlack} className={styles.button}>
            <i className="fab fa-slack" />
            <span>  Login with Slack</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  loggedIn: PropTypes.bool,
  verifySlackCode: PropTypes.func.isRequired,
  location: RRPropTypes.location.isRequired,
};

Login.defaultProps = {
  loggedIn: false,
};

export default AuthContainer(Login);
