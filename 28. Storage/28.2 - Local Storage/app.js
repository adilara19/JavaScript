//Local Storage Kullanımı
//? Local Storage'e eklenilen değerler, tarayıcı veya bilgisayar kapansa dahi silinmez. Uzun süreli tutulur.

//Değer Ekleme
localStorage.setItem("motion1","Push up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Burpee");
localStorage.setItem("motion4","Squat");

//Değeri Almak
let value = localStorage.getItem("motion1");
console.log(value);

//Değer Silmek
localStorage.removeItem("motion4");

//Tümünü Temizle
localStorage.clear();


let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];
localStorage.setItem("motions",JSON.stringify(motions));

let data =  JSON.parse(localStorage.getItem("motions"));

data.forEach(function(motion){
    console.log(motion);
});