import _ from 'lodash';
import Dog from './dog';

if (!foo) {
  console.log('import error'); // eslint-disable-line no-console
}

console.log(_.size([1, 2, 3, 4, 5, 6])); // eslint-disable-line no-console

const hello = (name = 'friend') => {
  console.log(`Hello, ${name}`); // eslint-disable-line no-console
};

hello('Disha');

console.log(`Hello dog - ${new Dog('Blue').getName()}`);
