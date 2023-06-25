// ##### ARRAY di JS

// #### JENIS - JENIS ARRAY
const array = [];
const arrayStr = ["Fahrul", "Rizky", "al fadillah"];
const arrayInt = [1, 2, 3];
const arrayBool = [true, false];
const mixArray = ["Fahrul", 19, true];
const arrayOfArray = [
  ["fahrul", "rizky", "al fadillah"],
  ["soekarno", 20, false],
];
// console.log(arrayOfArray);

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// #### MENAMBAHKAN DATA KEDALAM ARRAY
const addLastArray = ["fahrul", "riski"];
// console.log(addLastArray);
addLastArray.push("al fadillah"); //menambahkan data ke akhir array
// console.log(addLastArray);

const addFirstArray = ["fahrul", "riski"];
// console.log(addFirstArray);
addFirstArray.unshift("nama gua"); //menambahkan data ke awal array
// console.log(addFirstArray);

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// #### MENGHAPUS DATA DIDALAM ARRAY
const delLastArray = ["data pertama", "data terakhir"];
// console.log(delLastArray);
delLastArray.pop(); //menghapus data paling akhir pada array, tidak memerlukan arg
// console.log(delLastArray);

const delFirstArray = ["data pertama", "data terakhir"];
// console.log(delFirstArray);
delFirstArray.shift(); //menghapus data paling awal pada array, tidak memerlukan arg
// console.log(delFirstArray);

const flexArray = ["ucup", "maman", "herman"];
// console.log(flexArray);
flexArray.splice(0, 2); //arg pertama index array, arg kedua jumlah data yg mau di delete
// console.log(flexArray);

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// #### MENCARI DATA DIDALAM ARRAY
const searchArray = ["fahrul", "rizky", "al fadillah", "ganteng", "aamiin"];

const filterArray = searchArray.filter((item) => item === "fahrul"); //mencari dan membuat array baru
const ulangSearch = searchArray.filter((data) => data === "rizky");
// console.log(filterArray);

const mapArray = searchArray.map((item) => {
  return item + " ganteng"; //melakukan perubahan data dan membuat array baru
});
console.log(mapArray);
