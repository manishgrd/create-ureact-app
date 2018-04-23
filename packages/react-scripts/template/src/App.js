import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.REACT_APP_SERVER_URL) {
      throw new Error('Please define `REACT_APP_SERVER_URL` in your .env file');
    }

    const serverUrl = process.env.REACT_APP_SERVER_URL

    return { serverUrl };
  }

  render() {

    const { serverUrl } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Create UReact App</h2>
        </div>
        <p className="App-intro">
           <b> Node ENV: { process.env.NODE_ENV } </b><br/><br/>
           <b> Server URL: { serverUrl} </b>
        </p>
      </div>
    );
  }
}

export default App;
