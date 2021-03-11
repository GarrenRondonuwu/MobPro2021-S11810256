//Garren Rondonuwu
//Exercise - 3

//No.1
// Class
// class Orang{
//    constructor(nama. umur){
//        this.nama = nama;
//        this.umur = umur;
//    }
// }
// bekerja(){
//    console.log('${this.nama} sedang bekerja seperti biasa');
// }

// user1 = new Orang('Garren Axel Arie', 20);
// console.log(user1.bekerja());
// user1.bekerja();


//No.2
//Inheritance
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        return `${this.nama} sedang tidur`;
    }
    makan(){
        return `${this.nama} sedang makan`;
    }
} 


class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah =namaSekolah;
    }
    belajar(){
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}

let user = new Pelajar('John', 17, 'Unklab');
console.log(user);