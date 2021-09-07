// console.log("-------------------- NO 1 --------------------");
// var a = 5;
// let b = "kampus merdeka";
// let nama = "Budi";
// let terdaftar = true;
// let lengkap_arr = [a, b, nama, terdaftar];

// function perkenalan() {
//   var asal = "indonesia";
//   return console.log(
//     "perkenalakan nama saya " +
//       nama +
//       " nomor urut " +
//       a +
//       " sekarang sedang mengikuti " +
//       b +
//       " berasal dari " +
//       asal
//   );
// }

// if (terdaftar === true) {
//   console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
// }

// console.log("Array = " + lengkap_arr[2]);

// a = b;
// // nama = b;
// // console.log("asal diakses = " + asal);
// console.log("a adalah = " + a);
// console.log("b adalah = " + b);

// perkenalan();

// -------------------- NO 2 --------------------"
//Karena pada variabel global value dari variabel terdaftar itu false sedangkan kondisi pada if, value dari variabel terdaftar harus true untuk mengeksekusi program dalam kondisi if, dan kita perlu mengubah value dari salah satu variabel agar valuenya menjadi sama dan program dapat ditampilkan.

//dapat di eksekusi, tetapi output yang dihasilkan berbeda pada awal pendeklarasiannya karena telah di assign dengan value baru yaitu value dari variabel 'b'.

//dapat di eksekusi, dan output yang dihasilkan sesuai dengan awal pendeklarasian variabel, karena tidak di assign dengan value yang baru pada variabel tersebut.

//karena variabel 'nama' itu constant sehingga tidak dapat di reassign dengan value yang baru. agar tidak terjadi error tipe variabel bisa diganti dari 'constant' menjadi 'let' atau 'var'.

// console.log("");
// console.log("-------------------- NO 3 --------------------");
// let bdays = ["10-17", "05-19", "20-19"];
// let bthdays = bdays.map((i) => i.replace("-", "/"));
// console.log(bthdays);
// console.log("");

// console.log("");
// console.log("-------------------- NO 4 --------------------");
// let value = [1, 2, 3, 4, 5, 6];
// let arrbaru = value.map((i) => i * 2);
// console.log(arrbaru);
// console.log("");

console.log("");
console.log("-------------------- NO 5 --------------------");
let arr = [1.5, 2.56, 5.1, 12.33];
let hasil = arr.map((a) => Math.ceil(a));
console.log(hasil);
console.log("");

// console.log("");
// console.log("-------------------- NO 6 --------------------");
// let nilai1 = [1, 2, 3, 4, 5, 6];
// let nilai2 = (i, j) => i + j;
// console.log(nilai1.reduce(nilai2));
// console.log("");

// console.log("");
// console.log("-------------------- NO 7 --------------------");
// let filterValue = [-4, 3, 2, -21, 1];
// let result = filterValue.filter((angka) => angka > 0);
// console.log(result);
// console.log("");

// console.log("");
// console.log("-------------------- NO 8 --------------------");
// var data = [
//   { name: "daniel", age: 45 },
//   { name: "john", age: 30 },
//   { name: "robert", age: null },
//   { name: "jen", age: undefined },
//   { name: null, age: undefined },
// ];

// let namaUmur = data.filter(
//   (j) => j.name !== null && j.age !== null && j.age !== undefined
// );
// console.log(namaUmur);
// console.log("");

// for (let i = 0; i < data.length; i++) {
//   if (
//     data[i].name !== null &&
//     data[i].age !== null &&
//     data[i].age !== undefined
//   ) {
//     console.log(data[i]);
//   }
// }
