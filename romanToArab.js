function romanToArabic(number) {
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
  
    //module.exports.romanize = romanize;