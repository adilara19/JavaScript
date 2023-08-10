
//! CONVERT STRING TO NUMBER

//* 1-) Elimizde Varolan Değişkenin Tipini Number Olarak Değiştirmek

let a = 5;
let b = "10";

/*

console.log(a+b); ----------> sonuç: 510. Çünkü 5 number veri tipindeyken "10" string veri tipindedir ve bu iki farklı veri tipi toplanmaz, yan yana yazılır (yani birleştirilir).
Bu yüzden b değişkeninin veri tipini number olarak değiştirip a ile b'yi toplayabiliriz.

örneğin:

let a = 5;
let b = Number("10");

console.log(a+b); ------------> sonuç: 15

*/

//* 2-) Elimizde Varolan Değişkeni Yeni Bir Değişkene Atayıp Ona Number Veri Tipini Vermek

let c = Number(b); //Burada b değişkeninin veri tipini number olarak değiştirip yeni oluşturduğumuz c değişkenine atadık.
console.log(typeof c);
console.log(a + c);


//* 3-) parseInt() fonksiyonu verilen string tipini number olarak çevirir

let m = 8;
let n = parseInt("12");
console.log(m + n);

let primary = parseFloat("3.5"); //parseFloat() değişkeni verilen float tipindeki sayıyı olduğu gibi ekrana yazdırır
let secondary = 5;
console.log(primary+ secondary);





//! CONVERT NUMBER TO STRING

let x = String(55); //değişkenin veri tipini string olarak değiştirebilmemiz için String() kullanırz.
console.log(typeof x, x);


let access = (100).toString(); //.toString() değişkeni ile de numberdan stringe dönüştürebiliriz. 
console.log(typeof access, access);


//! CONVERT BOOLEAN TO STRING

let total = String(true);
console.log(typeof total, total);


let equation = String(false);
console.log(typeof equation, equation);


//! TRYING TO CONVERT A VALUE WHICH IS NOT A NUMBER

let no = Number("Dilara");
console.log(no); //console.log(no) ------> NaN çıktısını verir, bunun açılımı da not a number'dır.


let ultimate = Number([1,2,3,4]);
console.log(ultimate); //console.log(ultimate) -------> NaN çıktısını verir, çünkü [1,2,3,4] bir arraydir ve number'a dönüştürülemez.


//! CONVERT OBJECT TO STRING

let digits = String([1,2,3,4,5]);
console.log(typeof digits, digits);