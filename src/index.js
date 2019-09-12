const _ = require('lodash');

console.log(_.size([1, 2, 3, 4, 5, 6])); // eslint-disable-line no-console

const hello = (name = 'friend') => {
  console.log(`Hello, ${name}`); // eslint-disable-line no-console
};

hello('Disha');
