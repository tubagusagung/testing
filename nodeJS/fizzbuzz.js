// membuat perhitungan untuk fizz, buzz, dan fizzbuzz
const fizzbuzz = function (isFizzbuzz) {
  if (isFizzbuzz % 3 == 0 && isFizzbuzz % 5 == 0) return "Fizzbuzz";
  if (isFizzbuzz % 3 == 0) return "Fizz";
  if (isFizzbuzz % 5 == 0) return "Buzz";
  return isFizzbuzz;
};

// contoh menggunakan banyak data sebanyak 100
const exampleNumber = 100;
for (let i = 1; i <= exampleNumber; i++)
  // menggunakan node fizbuzz pada terminal untuk testing
  console.log(fizzbuzz(i));
