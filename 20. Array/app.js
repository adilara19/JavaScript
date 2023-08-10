//? Array
/*

    'Array(Dizi)':
        - birden fazla yapıyı bir bütün halinde tutmaya yarayan yapılardır.
        - dizilerin içerisinde bulunan içeriklere 'index' denir ve numaralandırılması sıfırdan başlayarak yapılır
        - diziler aslında object veri tipindedirler.

*/


// Number Array
let numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,14,14];
numbers[13]=13;  //Arraydeki 13. indexin değerini değiştirdi
console.log(numbers[13]);
console.log(numbers); //Arraydeki bütün değerleri panele yazdırdı


// Name Array
let names = ["Ayşe","Dilara","Melisa","Dilem"];
names[0]="Diğdem"; //Arraydeki 0. indexin değerini değiştirdi
console.log(names[0]);
console.log(names); //Arraydeki değerlerin bir bütün halinde console paneline yazdırılmasını sağlar

//Mixed Type of Array
let mixedArray = [1, "Dilara", 3.9, true, null, undefined, false,];
console.log(mixedArray[2]);
console.log(mixedArray[3]);


//? FOREACH DÖNGÜSÜ
/*

Foreach döngüsü arraylerde kullanılır

*/


//* Burada belirttiğimiz arrayın içinde bulunan değerlerin her biri sırayla çağrılır ve listelenir
let nameSurnames = ["Ayşe Dilara Öztürk", "Melisa Güneşer", "Dilem Rumet Başak", "Diğdem Güçlüeller"];
nameSurnames[1]="Burcu Orhan";
nameSurnames.forEach(function(Name){
    console.log(Name);
});

//
let ages = [22,23,25,22];
for(let i = 0; i<ages.length; i++){
    console.log(ages[i]);
}