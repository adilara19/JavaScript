//DEĞER VE REFERANS TİPLERİ

/*
Data Types and Data Structures
------------------------------

*Primitive Values (İlkel Veri Türleri):
~ String
~ Number
~ Boolean
~ Undefined
~ Null
~ Symbol
~ BigInt

* Reference Types (Referans Veri Türleri):
~ Objects
~ Arrays
~ Functions
*/

//! Değer Tipleri
let a = 19;
let b = a;

console.log("a : " + a);
console.log("b : " + b);

console.log("-------------");

b = 10;
console.log("b: " + b);
console.log("a: " + a); 

/*

RAM Belleğin iki tane bölümü vardır.
Bunlardan bir tanesi Stack diğeri de Hip olarak adlandırılır.
Bizim Değer Tiplerimiz, RAM Belleğin STACK bölümünde tutulur
Bizim Referans Tiplerimiz de, HİP bölümünde tutulur.

*/

console.log("-------------");



//! Referans Tipleri
let dizi1 = [1,2,3];
let dizi2 = dizi1;

//* Bu örnekte dizi1, dizi2ye atandı. Dolayısıyla aynı elemanlara (değerlere) sahipler. Dolayısıyla Eşitler!
if(dizi1==dizi2){
    console.log("EŞİTTİR.");
}else{
    console.log("EŞİT DEĞİLDİR.");
}


let array1 = [1,2,3];
let array2 = [1,2,3];

//* Bu örnekteyse, dizi1 ve dizi2'nin değerleri eşit olsa da adresleri farklı, ve biz bu dizilerin adrelerinin aynı olup olmadığını kontrol ediyoruz. Adresleri farklı olduğu için bu iki dizi birbirlerine eşit değil.
if(array1==array2){
    console.log("Eşittir");
}else{
    console.log("Eşit Değildir");
}

//* array1 ve array2 eşit değildir çünkü ram bellekteki adresleri farklı
//* yani bunlar değer tipli değil, referans tipli çalışmaktadır.


let sayi1 = [1,2,3,4];
let sayi2 = sayi1;

sayi2.push(12);
console.log(sayi1);
console.log(sayi2);
//* sayi1 ve sayi2 arrayleri, aynı adrese baktığı için, birinde yapılan değişiklik diğerini de etkiler.