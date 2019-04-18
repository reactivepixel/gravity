import React from 'react';
import API from '../API';

export default function container(Component) {
  return class AuthContainer extends React.Component {
    state = {
      loggedIn: !!localStorage.getItem('token'),
    }

    verifySlackCode = async (code) => {
      const { token, loggedIn } = await API.post('/auth/slack', { code, url: process.env.REACT_APP_CALLBACK_URL });
      localStorage.setItem('token', token);
      this.setState({ loggedIn });
    }

    logout = () => {
      localStorage.removeItem('token');
      this.setState({ loggedIn: false });
    }

    render() {
      const { loggedIn } = this.state;
      return (
        <Component
          /* pass all other props that are being passed to this component forward */
          {...this.props}
          loggedIn={loggedIn}
          verifySlackCode={this.verifySlackCode}
          logout={this.logout}
        />
      );
    }
  };
}
