// membuat perhitungan untuk fizz, buzz, dan fizzbuzz
const fizzbuzzz = (isFizzbuzz: number) => {
  if (isFizzbuzz % 3 == 0 && isFizzbuzz % 5 == 0) return "Fizzbuzz";
  if (isFizzbuzz % 3 == 0) return "Fizz";
  if (isFizzbuzz % 5 == 0) return "Buzz";
  return isFizzbuzz;
};

// contoh menggunakan banyak data sebanyak 100
let contohNomor: number = 100;
for (let i: number = 1; i <= contohNomor; i++)
  // menggunakan ts-node fizbuzz.ts pada terminal untuk testing (menggunakan package manager ts-node)
  console.log(fizzbuzzz(i));
