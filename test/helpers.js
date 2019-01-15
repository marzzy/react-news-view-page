// ------------------
// Sinon
// ------------------
import sinon from 'sinon';

global.sinon = sinon;

// ------------------
// Chai
// ------------------
const chai = require('chai');

global.expect = chai.expect;

// ------------------
// Enzyme
// ------------------
const { shallow, mount, render, configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
global.render = render;

// ------------------
// React (if using ProvidePlugin from webpack all of these are needed)
// ------------------
const React = require('react');
const PropTypes = require('prop-types');
const ReactDOM = require('react-dom');

global.React = React;
global.PropTypes = PropTypes;
global.ReactDOM = ReactDOM;
