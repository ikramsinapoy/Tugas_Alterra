console.log("-------------------- NO 3 --------------------");
let bdays = ["10-17", "05-19", "20-19"];
let bthdays = bdays.map((i) => i.replace("-", "/"));
console.log(bthdays);
console.log("");

console.log("-------------------- NO 4 --------------------");
let value = [1, 2, 3, 4, 5, 6];
let arrbaru = value.map((i) => i * 2);
console.log(arrbaru);
console.log("");

console.log("-------------------- NO 5 --------------------");
let arr = [1.5, 2.56, 5.1, 12.33];
let hasil = arr.map((a) => Math.ceil(a));
console.log(hasil);
console.log("");

console.log("-------------------- NO 6 --------------------");
let nilai1 = [1, 2, 3, 4, 5, 6];
let nilai2 = (i, j) => i + j;
console.log(nilai1.reduce(nilai2));
console.log("");

console.log("-------------------- NO 7 --------------------");
let filterValue = [-4, 3, 2, -21, 1];
let result = filterValue.filter((angka) => angka > 0);
console.log(result);
console.log("");

console.log("-------------------- NO 8 --------------------");
var data = [
  { name: "daniel", age: 45 },
  { name: "john", age: 30 },
  { name: "robert", age: null },
  { name: "jen", age: undefined },
  { name: null, age: undefined },
];

let namaUmur = data.filter(
  (j) => j.name !== null && j.age !== null && j.age !== undefined
);
console.log(namaUmur);
console.log("");

// for (let i = 0; i < data.length; i++) {
//   if (
//     data[i].name !== null &&
//     data[i].age !== null &&
//     data[i].age !== undefined
//   ) {
//     console.log(data[i]);
//   }
// }
