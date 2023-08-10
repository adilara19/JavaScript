//Session Storage
//? Sesion Storage'e eklenilen değerler, tarayıcıyı kapattığımız zaman silinir. Uzun süreli saklanılmaz.

//Değer Ekleme
sessionStorage.setItem("19331157","Dilara");
sessionStorage.setItem("1071","Serbes");
sessionStorage.setItem("1489","Melisa");
sessionStorage.setItem(552,37);

//Değer Silme
// sessionStorage.removeItem("552");

let value =  sessionStorage.getItem("1071");
if(value ===null){
    console.log("Değer Bulunamadı.");
}else{
    console.log("Değer Bulundu :",value);
}

//Hepsini Silme
// sessionStorage.clear();


let data = sessionStorage.getItem(552);
console.log(typeof data);
//? Session Storage'e eklenen tüm değerler string olarak eklenir.


//Session Storage - Array Yazdırma
let names = ["Ali","Enes","Kübra","Adem","Ayşenur"];
sessionStorage.setItem("names",JSON.stringify(names));

let storage = JSON.parse(sessionStorage.getItem("names"));
storage.forEach(function(name){
    console.log(name);
})

