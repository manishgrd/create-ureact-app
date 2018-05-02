// Jest test setup file
//
// This file will run before each jest test.
// Use this for any mocking or configuration that needs
// to happen before all tests.

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
