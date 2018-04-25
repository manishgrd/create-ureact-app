import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="App-intro">
            <b> react_app_env: {appEnv} </b>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
