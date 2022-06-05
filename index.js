const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, x)=>{ 
   const list = [];
   let result = x(names);
  
   for( let a = 0; a < result.length; a++){
     b = a + 1 + ". "+ result[a];
     list.push(b);
   }
 
  return list;

};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) =>{   
  let c = names.sort((a, b) => (a > b ? 1 : -1));
 // console.log(c);
  return c;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) =>{
  
  let d = names.sort((a, b) => (a > b ? -1 : 1));
 // console.log(names);
  return d;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
