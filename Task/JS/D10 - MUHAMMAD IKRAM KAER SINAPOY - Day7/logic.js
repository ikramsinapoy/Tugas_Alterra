// NO 1
// let konfersiMenit = (number) => {
//   menit = Math.floor(number / 60);
//   detik = number % 60;
//   if (detik < 10) {
//     return menit + ":0" + detik;
//   } else {
//     return menit + ":" + detik;
//   }
// };

// console.log(konfersiMenit(88));
// console.log(konfersiMenit(53));
// console.log(konfersiMenit(120));
// console.log(konfersiMenit(124));

// NO 2
function inputHarusGenap(angka) {
  if (angka % 2 !== 0) {
    throw "Invalid";
  }

  return "Valid";
}

try {
  console.log(inputHarusGenap(7));
} catch (e) {
  console.log(e);
}

try {
  console.log(inputHarusGenap(4));
} catch (e) {
  console.log(e);
}

// NO 3
// function perkalianUnik(arr) {
//   array = [];
//   for (let i = 0; i < arr.length; i++) {
//     let hasil = 1;
//     indexHilang = arr.splice(i, 1);
//     for (let j = 0; j < indexHilang.length; j++) {
//       hasil = hasil * arr[j];
//     }
//     array.push(hasil);
//   }
//   return array;
// }
// console.log(perkalianUnik([2, 4, 6]));
// console.log(perkalianUnik([1, 2, 3, 4, 5]));
// console.log(perkalianUnik([1, 4, 3, 2, 5]));
// console.log(perkalianUnik([1, 3, 3, 1]));
// console.log(perkalianUnik([2, 1, 8, 10, 2]));
