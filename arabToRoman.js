
document.getElementById('romToAraBtn').addEventListener('click', () => {
  const inputValue = document.getElementById('romToAraInput').value;
  if (inputValue.match(/\d+/)) {
    const input = parseInt(inputValue);
    romanize(input);
  } else {
    maxiTaxi(inputValue);
  } 
});

//Arabic to Roman

function romanize(num) {
  console.log('romanize fires');
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    if (num < 0) {
      // document.getElementById('romtoaraResult').innerHTML = 'No negative numbers';
      console.log('this should never be called, no negative numbers', num);
      return;
      // document.getElementById('romtoaraResult').innerHTML = errorMsg;
      
    }
    
    if (typeof (num) === 'number') {
      let str = '';
      const romanKeys = Object.keys(roman);
      const romanValue = Object.values(roman);
  
      romanKeys.forEach((e, index) => {
        while (num >= romanValue[index]) {
          str += e;
          num -= romanValue[index];
        }
      });
      const buzz = romanToArabic(str);
      const fizzbuzzi = isValidNumber(buzz);
      return document.getElementById('romtoaraResult').innerHTML = `Arabic to Roman: ${str} and it ${fizzbuzzi}`;
      
    }
    console.log('all kinds of fakked');
    return 'all kinds of fakked';
  }

//Roman to Arabic

function maxiTaxi(str) {
    console.log('MaxiTaxi fires');
    const mur = romanToArabic(str);
    const fizz = isValidNumber(mur);
    return document.getElementById('romtoaraResult').innerHTML = `Roman to Arabic: ${mur} and it ${fizz}`;
}

  function romanToArabic(number) {
    console.log('romanToArabic fires');
    const values = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };
    const two = number.slice(0, 2);
    if (!number) return 0;
    return two in values
      ? values[two] + romanToArabic(number.slice(2))
      : values[number[0]] + romanToArabic(number.slice(1));
    }

    //Fizzy buzzy
    
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
        return 'No Fizz or Buzz :(';
      };
      
      const fizzBuzz = numArr => {
        const newArr = numArr.map(int => isValidNumber(int));
        return newArr;
      };
      

  //module.exports.romanToArabic = romanToArabic;