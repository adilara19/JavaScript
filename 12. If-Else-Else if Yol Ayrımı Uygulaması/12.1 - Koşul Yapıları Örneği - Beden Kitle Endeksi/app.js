// Beden Kitle Endeksi Hesaplama



let kilo = Number(prompt("Kilonuzu giriniz"));
let boy = Number(prompt("Boyunuzu metre cinsinden giriniz: "));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    console.log("İdeal Kilonun Altında. \n Beden Kitle Endeksiniz: " +sonuc);
}
else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İdeal Kiloda. \n Beden Kitle Endeksiniz: " +sonuc);
}
else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İdeal Kilonun Üstünde. \n Beden Kitle Endeksiniz: " +sonuc);
}
else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("İdeal Kilonun Çok Üstünde (obez). \n Beden Kitle Endeksiniz: " +sonuc);
}
else if (sonuc >= 40) {
    console.log("İdeal Kilonun Çok Üstünde (morbid obez). \n Beden Kitle Endeksiniz: " +sonuc);
}