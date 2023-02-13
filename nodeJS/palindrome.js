//mengubah karakter huruf menjadi huruf kecil
var karakterKecil = function (nilai) {
  return nilai.toLowerCase();
};

// memecah object string menjadi array
var splitString = function (nilai) {
  return nilai.split("");
};

// membalikan array
var reverseString = function (nilai) {
  return nilai.reverse();
};

// menggabungkan semua elemen array menjadi string
var joinString = function (nilai) {
  return nilai.join("");
};

// untuk validasi jawaban dengan menjawab menggunakan tipe data boolean
var palindrome = function (nilai) {
  var kecilkanHuruf = karakterKecil(nilai);
  var karakterArray = splitString(kecilkanHuruf);
  var validasiKarakter = "abcdefghijklmnopqrstuvwxyz".split("");
  var kalimatArray = [];
  karakterArray.forEach((karakter) => {
    if (validasiKarakter.indexOf(karakter) > -1) kalimatArray.push(karakter);
  });

  var joinStringIni = joinString(kalimatArray);

  var reverseStringIni = reverseString(kalimatArray);
  var joinStringLagi = joinString(reverseStringIni);

  return joinStringIni === joinStringLagi;
};

var jawaban = palindrome("Madam I,m Adam");
var jawabanSatu = palindrome("Men In Black");
var jawabanDua = palindrome("AbaBaBAbABa");

// menggunakan node palindrome pada terminal untuk testing
console.log(jawaban);
console.log(jawabanSatu);
console.log(jawabanDua);
