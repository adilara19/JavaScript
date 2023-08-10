/*

? Veri Tipleri

1- String - çift tırnaklar içerisinde kullanılan harf barındıran şeyler için string tipi kullanılır
2- Number - sayıları tutmak için number tipi kullanılır
3- Boolean - true ve false durumları için kullanılır
4- Null - boş
5- Undefined - değişken oluşturulmuş ama veri ataması yapılmamıştır
6- Object - primitive ve referans tip olmak üzere ikiye ayrılır
7- Function

*/

//! String Veri Tipi
let isim = "Dilara";
console.log(typeof isim);

//! Number Veri Tipi
let sayi1 = 10.7;
console.log(typeof sayi1);

//! Boolean Veri Tipi
console.log(5>2);
console.log(5>8);

let a = 5;
let b = 3;
let sonuc = a+b;
console.log(sonuc!=15);

//! Null Veri Tipi
let x = null;
x = 27;
console.log(x);

//! Undefined Veri Tipi
let c;
console.log(typeof c);

//! Object Veri Tipi
let insan ={
    name:"Ayse",
    surname: "Öztürk",
    yas: 23
}
console.log(typeof insan);

let rakamlar =[1,2,3,4,5]
console.log(typeof rakamlar);


//! Function Veri Tipi
let func = function(){
    console.log("Merhaba");
}

func();
console.log(typeof func);