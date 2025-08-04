import {formartCurrency} from '../scripts/utilis/money.js';


console.log('test suite: formartCurrency');
console.log('converts cents into dollars');
if (formartCurrency(2095) === '20.95') {
  console.log('passed');
}else{
  console.error('failed');
}

console.log('Works with 0')
if (formartCurrency(0) === '0.00') {
  console.log('passed');
}else{
  console.error('failed');
}

console.log('rounds up to the nearest cent')
if (formartCurrency(2000.4) === '20.00') {
  console.log('passed');
}else{
  console.error('failed');
}


