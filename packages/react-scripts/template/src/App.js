import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './app.module.scss';

class App extends Component {
  getEnvValues() {
    if (!process.env.REACT_APP_ENV) {
      throw new Error('Please define `REACT_APP_ENV` in your .env file');
    }

    const appEnv = process.env.REACT_APP_ENV;

    return { appEnv };
  }

  render() {
    const { appEnv } = this.getEnvValues();

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className={styles.intro}>
            <b> react_app_env: {appEnv} </b>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
