function romanToArabic(romanNumber) {
   const newRomanNumber = romanNumber.toUpperCase();
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
    const two = newRomanNumber.slice(0, 2);
    if (!newRomanNumber) return 0;
    return two in values
      ? values[two] + romanToArabic(newRomanNumber.slice(2))
      : values[newRomanNumber[0]] + romanToArabic(newRomanNumber.slice(1));
  }
  
