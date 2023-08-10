//? ARRAY METHODLARI

/*

push:        dizinin sonuna eleman ekler, ve eklenen yeni elemandan sonra dizinin uzunluğunu döner. (returns)
unshift:     dizinin başına eleman ekleri eleman sayısını geriye döner

pop:         dizinin sonundan eleman siler, eleman sayısını döner
shift:       dizinin başından eleman siler, eleman sayısını döner

splice(index, index):     eleman eklemek ve silmek için kullanılır.

toString:     diziyi stringe çevirmek için kullanılır.
join:         diziyi stringe çevirirken araya eleman ekleme kolaylığı sağlar

concat:       dizileri birleştirmek için kullanılır.
slice:        diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length:       dizinin uzuluğunu verir.
reverse:      dizinin elemanlarının tersten yazılmasını (görünmesini) sağlar.
split:        belirli bir ifadeye göre bölüp diziye çevirmek için kullanılır.
indexOf:      dizideki elemanın index numarasını verir.
includes:     verilen elemanın dizide yer alıp almamasına bakar.

*/




let cars = ["BMW", "Mercedes", "Porsche", "Audi", "Suzuki", "Honda", "Toyota", "Mini Cooper", "Range Rover"];
let country = ["İngiltere", "Almanya", "Japonya", "Kore", "Avusturalya", "İtalya"];
console.log(cars.length); //uzunluğu----9
console.log(country.length); //uzunluğu------6


//! push method
let lengthOfArray = cars.push("Opel");
console.log(lengthOfArray); //push methodu ile yeni değer ekledikten sonraki hali ve uzunluğu----10

//! unshift method
cars.unshift("Hundai"); //unshift methodu ile dizinin en başına yeni eleman ekledik ve uzunluğu----11 oldu
console.log(cars);

//! pop method
let deletedValue = cars.pop(); //pop methodu ile dizinin en sonundaki elemanı sildirdik
console.log(cars);
console.log(deletedValue); //silinen elemanı console paneline yazdırdık.

//! shift method
let deleted = cars.shift(); //shift methodu ile dizinin en başındaki elemanı sildirdik
console.log(cars);
console.log(deleted); //silinen elemanı console paneline yazdırdık.

//! splice method
console.log(cars); 
cars.splice(2,0,"Mazda"); //splice method ile dizinin belirlediğimiz herhangi bir indexine eleman eklemek için kullandık
console.log(cars);

//! toString method
let stringCars = cars.toString();
console.log(typeof stringCars); //dizinin type'ını (object iken), stringe çevirdik

//! join method
let stringAddCars = cars.join("."); //join method ile dizinin elemanlarını aralarına nokta koyarak birleştirdik
console.log(stringAddCars);

//! concat method
let concatenatedArray = cars.concat(country); //concat method ile iki farklı diziyi tek bir dizi haline getirdik
console.log(concatenatedArray);

//! slice method
let differentArray = cars.slice(2,6); //slice method ile dizinin içindeki elemanları istediğimiz yerden kestik
console.log(differentArray);

//! length özelliği
console.log(country); //length özelliği ile dizinin uzunluğunu bulduk

//! reverse method
console.log(country);
let reverseCountry = country.reverse(); //reverse method ile dizinin içindeki elemanların sıralamasını tersine çevirdik
console.log(reverseCountry);

//! split method
let names = "Dilara, Melisa, Diğdem";

let splittedNames = names.split(","); //split method ile yazılan değerleri bir diziye çevirdik
console.log(splittedNames);

//! indexOf method
let index = cars.indexOf("BMW");
if(index == 0){
    console.log("Seçilen marka mevcut stokta vardır! ");
}else{
    console.log("Seçilen marka mevcut stokta yoktur. ");
}

//! includes method
let final = country.includes("İtalya"); //includes method ile aradığımız elemanın dizide olup olmamasına baktık
if(final){
    console.log("Aradığınız ülkeden teslimat mevcuttur! " + final);
}else{
    console.log("Aradığınız ülkeden teslimat mevcut değildir! " +final);
}
