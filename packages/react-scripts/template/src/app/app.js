import React, { Component } from 'react';
import logo from 'assets/udacity.svg';
import Environment from 'app/components/environment';
import styles from './app.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <object
            type="image/svg+xml"
            data={logo}
            className={styles.logo}
            aria-label="Udacity Logo"
          />

          <p>Congrats! Your new ureact app is up and running!</p>

          <p>
            Edit <code>src/app/app.js</code> and save to reload.
          </p>

          <Environment />
        </header>
      </div>
    );
  }
}

export default App;
