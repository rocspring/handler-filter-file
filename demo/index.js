/**
 * @file 给src的js文件添加eslint-disable
 **/
const path = require('path');
const prependFilterFile = require('../index');

const addContent = '/* eslint-disable */ \n';
const filterFun = (stat, path) => {
  return /\.js$/.test(path);
};

module.exports = function(handlerPath) {
  const folder =  path.resolve(__dirname, handlerPath);
  prependFilterFile(folder, addContent, filterFun);
};
