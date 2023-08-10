/*

? SORULAR
1- Türkçe 40       - her soru 4 puan
2- Matematik 40
3- Sosyal Bilgiler 20
4- Fen Bilimleri 20

-------> 100 Puan ÖSYM Tarafından Veriliyor
-------> Okul Puanı Max 60 Veriyor


*/

let turkceDogru , turkceYanlis = 0;
let matematikDogru , matematikYanlis = 0;
let sosyalDogru , sosyalYanlis = 0;
let fenDogru , fenYanlis = 0;
let puan = 0;
let okulPuanı = 0;


let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoş Geldiniz!"+yeniSatir
+ "1- Puan Hespla" +yeniSatir
+ "2- Çıkış Yap";

// alert(mesaj);
let secim = prompt(mesaj);

switch(secim)
{
    case "1":

        okulPuanı = Number(prompt("Okul Puanınızı Giriniz: "));
        turkceDogru = Number(prompt("Türkçe Doğru Sayısı: "));
        turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı: "));

        matematikDogru = Number(prompt("Matematik Doğru Sayısı: "));
        matematikYanlis = Number(prompt("Matematik Yanlış Sayısı"));

        sosyalDogru = Number(prompt("Sosyal Bilgiler Doğru Sayısı: "));
        sosyalYanlis = Number(prompt("Sosyal Bilgiler Yanlış Sayısı: "));

        fenDogru = Number(prompt("Fen Bilgisi Doğru Sayısı: "));
        fenYanlis = Number(prompt("Fen Bilgisi Yanlış Sayısı: "));

        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;

        let kalanNet = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanNet * 4) + 100 + okulPuanı;

        alert("TYT Puanınız: " +puan);

    break;

    case "2":
        alert("Uygulamadan Çıkış Yapıldı. ");
    break;

    default:
        alert("Lütfen Geçerli Aralıkta Değer Giriniz! ");
    break;
}