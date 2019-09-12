import _ from 'lodash';
import Dog from './dog';
import "./styles.css";

console.log(_.size([1, 2, 3, 4, 5, 6])); // eslint-disable-line no-console

const hello = (name = 'friend') => {
  console.log(`Hello, ${name}`); // eslint-disable-line no-console
};

hello('Disha');

console.log(`Hello dog - ${new Dog('Blue').getName()}`);
var ptag = document.createElement('p');
var text = document.createTextNode('This is a paragraph');
ptag.appendChild(text);
document.body.appendChild(ptag);