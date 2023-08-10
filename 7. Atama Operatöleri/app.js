/*

= atama operatörü a = 10 gibi
== eşittir operatörü 5=5 gibi
=== hem tiplerin hem de değerlerin birbirine eşit olup olmadığını kontrol eder
+= bir arttırır
-= bir eksiltir
*= çarpar
/= böler
%= modunu alır
**= üssünü alır

*/

let a = 5;
let b = 10;
let sonuc = a + b;
console.log(sonuc == 15);

console.log(5 == "5");

console.log(5 === 5);

//! "+=" Operatörü
let sayi = 4;
sayi = sayi + 2;
console.log(sayi);

let number = 4;
number += 2;
console.log(number);

//! "-=" Operatörü
let k = 4;
k = k - 3;
console.log(k);

let m = 4;
m -= 3;
console.log(m);

//! "*=" Operatörü
let s = 5;
s = s * 2;
console.log(s);

let n = 5;
n *= 2;
console.log(n);

//! "/=" Operatörü
let num = 12;
num = num / 4;
console.log(num);

let h = 12;
h /= 4;
console.log(h);

//! "%=" Operatörü
p =12;
p = p%5;
console.log(p);

//! "**=" Operatörü
t = 4;
t **= 2;
console.log(t);