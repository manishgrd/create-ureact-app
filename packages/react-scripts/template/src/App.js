import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_ENV) {
      throw new Error('Please define `REACT_APP_ENV` in your .env file');
    }

    const appEnv = process.env.REACT_APP_ENV

    return { appEnv };
  }

  render() {
    const {appEnv} = this.getEnvValues()
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Create UReact App</h2>
        </div>
        <p className="App-intro">
           <b> react_app_env: {appEnv} </b><br/><br/>
        </p>
      </div>
    );
  }
}

export default App;
