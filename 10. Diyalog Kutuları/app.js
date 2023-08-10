/*

-Alert
-Prompt: Kullanıcıdan değer alabiliyoruz ve kullanıcıdan alınan değerler her zaman string döner
-Confirm

*/



alert("Hello World");
alert("İşleminize devam etmeden önce kaydetmelisinzi!");

let isim = prompt("İsminizi Giriniz: ");
console.log(typeof isim);

let yas = prompt("Yaşınızı Giriniz: ");

console.log(typeof yas);

let sonuc = confirm("Silmek istediğinize emin misiniz?");
console.log(sonuc); // true ise tamam tuşuna basmıştır, false ise iptal tuşuna basmıştır 
