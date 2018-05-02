# create-ureact-app
Guide for Udacity fork of [facebook/create-react-app](https://github.com/facebook/create-react-app). The main [CRA User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) is a great place to start if you're unfamiliar with CRA. See documentation below for getting started and major additions/changes.

## To create a new app
1. Run `create-react-app my-new-app-name --scripts-version @udacity/react-scripts --use-npm`
1. `cd my-new-app-name`
1. `npm start`

## Development

### Environments
CRA requires separate `.env` files for each environment. Variables that you need to access inside of react need to be prefixed with `REACT_APP_`.

* `.env` - development
* `config/.env.preview` - preview
* `config/.env.production` - production
* `config/.env.staging` - staging
* `config/.env.test` - test

### Testing
Testing with jest and enzyme, including snapshots, is set up out of the box.

To run tests: `npm test`
To update snapshots: `npm test`, wait for failed snap then use the CLI prompts to update (`w, u`)

Snapshots will work fine with the default setup but it's recommended that you add the `enzyme-to-json` package for human-readable snapshots. To add:
1. Add the following jest config to your `package.json`
```js
"jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```
2. `npm install enzyme-to-json`
3. Run tests and update snapshots

### cssModules
cssModules are supported out of the box. There are a few differences in using cssModules with CRA:
1. `.scss` files using cssModules need to include the extension `.module.scss`
1. The cssModule generator is no longer available so the `className` syntax is required over `styleName`.
```js
// example
import styles from './example.module.scss';
...
<div className={styles.example}>Example</div>
```

## Prepare for first deployment
1. Update `BERLIOZ_NAME | CONDUCTOR_APP_ID` in `Makefile`
1. Update `.env` files and variables as needed for your app