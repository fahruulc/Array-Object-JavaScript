// ##### OBJECT DI JS

// #### JENIS - JENIS OBJECT
const object = {};
const strObject = {
  name: "Fahrul",
  address: "Japan",
};
// console.log(strObject.address);

const objectOfObject = {
  name: {
    firstName: "Fahrul",
    lastName: "Fadillah",
  },
  address: {
    country: "Indonesia",
    province: "West Java",
  },
  age: 19,
  married: false,
  sayHi: () => {
    console.log("ini adalah function dialam object");
  },
};
// objectOfObject.sayHi();
// console.log();

//  #### MENAMBAHKAN OBJEK
const addObject = {
  name: "fahrul",
  age: 19,
};

addObject["address"] = null; // cara pertama
addObject.address = "Swiss"; // cara kedua
// console.log(addObject);
addObject.addressFunc = () => console.log("Saya Tinngal Di Indonesia"); // nambahin func
// console.log(addObject);
// addObject.addressFunc();

// #### MENGHAPUS OBJECT
const deleteObject = {
  name: "Fadil",
  data: "data",
};
// console.log(deleteObject);
delete deleteObject.name;
// console.log(deleteObject);

// #### CARA MENCARI OBJECT
const searchObject = {
  name: "Fadil",
  age: 19,
  address: "Japan",
};

console.log(searchObject.address);
