document.getElementById('romToAraBtn').addEventListener('click', () => {
    const inputValue = document.getElementById('romToAraInput').value;
    if (inputValue.match(/\d+/)) {
      const input = parseInt(inputValue);
      romanize(input);
    } else {
      maxiTaxi(inputValue);
    } 
  });

// Some routing of some kind?

function maxiTaxi(str) {
    const mur = romanToArabic(str);
    const fizz = isValidNumber(mur);
    return document.getElementById('romtoaraResult').innerHTML = `Julius says: ${mur} and it ${fizz}`;
}    