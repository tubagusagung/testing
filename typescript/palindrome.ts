//mengubah karakter huruf menjadi huruf kecil
const karakterdiKecil = (nilai: string): string => {
  return nilai.toLowerCase();
};

// memecah object string menjadi array
const splitTheString = (nilai: string): string[] => {
  return nilai.split("");
};

// membalikan array
const reverseTheString = (nilai: string[]): string[] => {
  return nilai.reverse();
};

// menggabungkan semua elemen array menjadi string
const joinTheString = (nilai: string[]): string => {
  return nilai.join("");
};

// untuk validasi jawaban dengan menjawab menggunakan tipe data boolean
const isPalindrome = (nilai: string): boolean => {
  const kecilkanHuruf = karakterdiKecil(nilai);
  const karakterArray = splitTheString(kecilkanHuruf);
  const validasiKarakter = "abcdefghijklmnopqrstuvwxyz".split("");
  const kalimatArray = [];
  karakterArray.forEach((karakter) => {
    if (validasiKarakter.indexOf(karakter) > -1) kalimatArray.push(karakter);
  });

  const joinStringIni = joinTheString(kalimatArray);

  const reverseStringIni = reverseTheString(kalimatArray);
  const joinStringLagi = joinTheString(reverseStringIni);

  return joinStringIni === joinStringLagi;
};

const jawaban1 = isPalindrome("Madam, I'm Adam");
const jawaban2 = isPalindrome("Men In Black");
const jawaban3 = isPalindrome("AbaBaBAbABa");

// menggunakan ts-node palindrome.ts pada terminal untuk testing (menggunakan package manager ts-node)
console.log(jawaban1);
console.log(jawaban2);
console.log(jawaban3);
