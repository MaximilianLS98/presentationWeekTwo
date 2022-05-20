//Arabic to Roman
function romanize(num) {
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
      alert('No negative numbers pls');
      return;
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
      return document.getElementById('romtoaraResult').innerHTML = `Julius says: ${str} and it ${fizzbuzzi}`;
      
    }
    return 'all kinds of fakked';
  }
 

  