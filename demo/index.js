const prependFilterFile = require('../index');

const folder = './test';
const addContent = '/* eslint-disable */ \n';
const filterFun = (filePath) => {
  return /\.js$/.test(filePath);
};

prependFilterFile(folder, addContent, filterFun);