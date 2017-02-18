var testText = require('./jsontext.json');

module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = testText.testText;
  return greet;
};