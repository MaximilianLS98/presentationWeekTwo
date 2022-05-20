 const isValidNumber = num => {
  if (typeof (num) === 'string') {
    return 'Should not accept string';
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return 'no Fizz or Buzz :(';
};

// const fizzBuzz = numArr => {
//   const newArr = numArr.map(int => isValidNumber(int));
//   return newArr;
// };
  
