var _ = require("lodash");

// NO 1
console.log("");
console.log("                NO 1              ");
console.log("----------------------------------");
console.log("");
const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];

let mengumpulkan_tugas = ["rena", "omen"];
let belum_mengumpulkan = _.difference(anggota_kelas, mengumpulkan_tugas);
console.log(belum_mengumpulkan);

let kelompokAnggota = _.chunk(anggota_kelas, 2);
console.log(kelompokAnggota);

let printNama = _.join(anggota_kelas, "-");
console.log(printNama);

let balik = _.reverse(anggota_kelas);
console.log(balik);

let hapusIndex = _.drop(anggota_kelas);
console.log(hapusIndex);

// NO 2
console.log("");
console.log("                NO 2              ");
console.log("----------------------------------");
console.log("");

let count = 0;
let hasil = 0;
_.forEach(
  ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"],
  function (i) {
    if (count == -1 && i == "U") {
      hasil += 1;
    }
    if (i == "D") {
      count -= 1;
    }
    if (i == "U") {
      count += 1;
    }
  }
);
console.log(hasil);
console.log("");
