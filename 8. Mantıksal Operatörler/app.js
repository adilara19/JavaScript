/*

?Mantıksal Operatörler

&& - ve operatörü: bütün koşulların sağlaması veya true olması gerekir, bir tanesi bile sağlamazsa veya false olursa sonuç false olarak çıkar
|| - veya operatörü: bir koşul bile true çıkarsa sonuç direkt olarak true çıkar
! - değil operatörü: bir şeyin tersini (zıttını) alır

*/ 

//! "&&" Operatörü
let yas = 20;
let para = 3500;
let saglik = false;

console.log(yas >18 && para >3000 && saglik ==true);

//! "||" Operatörü
let age = 20;
let money = 3000;
let insurance = false;

console.log(age>18 || money>3000 || insurance == true);

//! "!" Operatörü
console.log( ! (5>3));

//örnek
let dolar = 2500;
let chance = 4;
let birthYear = 2001;
let health = true;

console.log((dolar > 3000 && chance >1) || (birthYear <2005 && health ==true));