// 1. Use strict
"use strict"

// 2. function.js
//function biasa
function tampilNama1 (nama, waktu) {
    return `Halo ${nama}, Selamat ${waktu}`
}
console.log(tampilNama1("Ani","Pagi"));

// function expression
const tampilNama2 = function (nama, waktu) {
    return `Halo ${nama}, Selamat ${waktu}`;
}
console.log(tampilNama2("Budi","Siang"))

// arrow function
const tampilNama3 = (nama, waktu) => { 
    return `Halo ${nama}, Selamat ${waktu}`;
}
console.log(tampilNama3("Dimas","Malam"))

// arrow implisit return, khusus 1 variabel
const tampilNama4 = nama => `Halo, ${nama}`;
console.log(tampilNama4("Randi"))

// arrow tanpa parameter
const tampilNama5 = () => `Hello World` ;
console.log(tampilNama5())

// 3. destucturingObj
// 3.1 Destructuring Assignment (bisa dari array dan object)
// Contoh pada Array
const ternak = ["Ayam", "Bebek", "Kambing", "Domba"]
const [a, , ternak3, ternak4] = ternak // inilah destruction array
// nama variabel a, b, ternak3, ternak4 itu bebas, yang penting urutannya sama         
// variabelnya bisa dikosongkan juga ex [a, , ternak3, ternak4]       
console.log(a)
//console.log(b)
console.log(ternak3)
console.log(ternak4)

// return value pada function
function coba () {
    return [1,2]
}
const [c, d] = coba()
console.log(c)

// Contoh pada Object
const mhs = {
    nama: "Sisi",
    umur: 24,
    hoby: "baca",
    pekerjaan: "irt"
}
const {nama, umur} = mhs // nama variabel (nama,umur) harus sama seperti di object
// const {umur, nama} // variabelnya bisa dibalik dan tidak harus diisi penuh
// const {umur}
console.log(umur) 

// kelebihan object bisa assigment ke variabel baru
const {hoby: kegiatan} = mhs
console.log(kegiatan) // baca

// bisa juga memberi default value
const {pekerjaan = "admin"} = mhs // default pekerjaan akan muncul jika diobject gak ada
console.log(pekerjaan) // irt

// Mengambil data pada Object, sebagai function
function getDataMhs (mhs) {
    return nama
}
console.log(getDataMhs(mhs)) // Sisi

// // 3.2 Destructuring Function
// function kalkulasi(a, b) {
//     return [a + b, a * b, a - b, a / b]
// }

// const [tambah, kali, kurang, bagi] = kalkulasi(2, 3)
// console.log(tambah) // 5
// console.log(kali) // 6
// console.log(kurang) // -1
// console.log(bagi) // 0.666

// Kalau pakai Object
function kalkulasi(a, b) {
    return {
        jumlah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {bagi, kali, kurang, tambah} = kalkulasi(2, 3)
console.log(bagi) // 0.666

// 4. Moduler js

/* index.js ==> tempat exe data
labil.js ==> tempat function utama (nama functionnya adalah akuFunction)
jika didalam folder yang sama nah

maka di labil.js ==> module.exports = akuFunction
dan di labil.js ==> const akuFunction = require("./index")
*/

// 5. Built in function
// u/ String
// 1. length, ==> udah sering dipake 
// 2. join ==> untuk gabungin string, bisa pake (, - dll)
// 3. split ==> Mengambil string dengan rentan indeks awal dan akhir.
// 4. includes ==> Memeriksa antara string 1 dan string 2. Apakah string 1 berada di string 2. Metod ini menghasilkan nilai boolean 

// https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
// u/ Array
// 1. forEach ==> 
// 2. map ==>
// 3. filter ==>


// 6. processArgv
const argv = process.argv
console.log(argv)