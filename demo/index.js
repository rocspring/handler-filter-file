const prependFilterFile = require('../index');

const folder = '../src';
const addContent = '/* eslint-disable */ \n';
const filterFun = (stat, path) => {
  return /\.js$/.test(path);
};

prependFilterFile(folder, addContent, filterFun);