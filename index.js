const fsFinder = require('fs-finder');
const prependFile = require('prepend-file');

module.exports = function prependFilterFile(folder, addContent, filterFun) {
  const filterList = fsFinder.from(folder).filter(filterFun).findFiles();
  console.log(filterList);

  filterList.forEach((filePath) => {
    prependFile(filePath, addContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('add success');
      }
    });
  });
};