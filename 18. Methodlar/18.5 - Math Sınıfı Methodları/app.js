//? Math Sınıfının Methodları

/*

-Floor
-Ceil
-Round

-Max
-Min

-Random
-Abs
-Sqrt
-Pow

---------> PI Sayısı

*/


//! Math.floor() Methodu
let a = 3.99;
console.log(Math.floor(a)); // Noktadan sonrasını kaldırıp tam sayı olarak verir


//! Math.ceil() Methodu
let b = 3.01;
console.log(Math.ceil(b)); // Verilen sayının bir üssü olan tam sayıya yuvarlar


//! Math.round() Methodu
let c = 3.51;
console.log(Math.round(c)); // En yakın tam sayıya yuvarlar


//! Math.max() Methodu
console.log(Math.max(1,2,15,49,105)); // En büyük sayıyı verir


//! Math.min() Methodu
console.log(Math.min(-22, -3, 0, 15, -1023)); // En küçük sayıyı verir


//! Math.abs() Methodu
let d = -12;
console.log(Math.abs(d)); // Mutlak değere alır


//! Math.sqrt() Methodu
console.log(Math.sqrt(64)); // Bir sayının karekökünü almak için kullanılır


//! Math.pow() Methodu
console.log(Math.pow(4,2)) // Bir sayının üssünü almak için kullanılır
console.log(Math.pow(5,3));


//! PI Sayisi
console.log(Math.PI); // PI Sayısı Ürtir


//! Math.random() Methodu
console.log(Math.floor(Math.random()*100)); // Rastgele bir değer üretir, bu değerin vigülden sonrasını atmak için Math.floor() Methodunu kullandık.
