import React, { Component } from 'react';
import '@udacity/veritas-components/dist/index.css';
import { Button, Icon } from '@udacity/veritas-components';
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

          <p>
            <Button onClick={this.onClick} variant="primary">
              <span className={styles.veritasGlyph}>
                <Icon
                  name="celebrate"
                  size="md"
                  altText="Veritas Celebrate Icon"
                />
              </span>
              &nbsp;Click me to do nothing (veritas)
            </Button>
          </p>

          <Environment />
        </header>
      </div>
    );
  }
}

export default App;
