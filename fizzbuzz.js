const isValidNumber = num => {
    if (typeof (num) === 'string') {
      return 'Should not accept string';
    }
    if (num < 0 || num > 100) {
      return 'Number cant be higher than 100 or lower than 0';
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
    return num;
  };
  
  const fizzBuzz = numArr => {
    const newArr = numArr.map(int => isValidNumber(int));
    return newArr;
  };
  
  // module.exports.fizzBuzz = fizzBuzz;