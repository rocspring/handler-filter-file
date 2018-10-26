const filter = require('filter-files');
const prependFile = require('prepend-file');

module.exports = function prependFilterFile(folder, addContent, filterFun) {
  const filterList = filter.sync(folder, filterFun);

  filterList.forEach((filePath) => {
    prependFile.sync(filePath, addContent);
  }); 
}