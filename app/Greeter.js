var testText = require('./jsontext.json'); //引入json

module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = testText.testText; // 使用
  return greet;
};