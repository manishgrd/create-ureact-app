import React from 'react';
import config from 'config';
import styles from './environment.module.scss';

const getEnvironmentValues = () => {
  if (!config.REACT_APP_ENV) {
    throw new Error('Please define `REACT_APP_ENV` in your .env file');
  }

  const appEnv = config.REACT_APP_ENV;

  return { appEnv };
};

export default class Environment extends React.Component {
  render() {
    const { appEnv } = getEnvironmentValues();

    return (
      <div className={styles.environment}>
        <code>
          {'{'}
          <ul>
            <li>react_app_env: {appEnv}</li>
          </ul>
          {'}'}
        </code>
      </div>
    );
  }
}
