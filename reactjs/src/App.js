/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.css';
import Header from './header';
import Login from './login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.body}>
          <Route path="/" component={Header} />
          <main className={styles.main__container}>
            <Route path="/login" exact component={Login} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
