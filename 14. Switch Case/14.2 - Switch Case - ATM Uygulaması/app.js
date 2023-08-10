// ATM Uygulaması

/*

1- Bakiye Görüntüleme
2- Para Çekme
3- Para Yatırma
4- Çıkış

*/


let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1- Bakiye Görüntüleme"+yeniSatir
+ "2- Para Çekme"+yeniSatir
+ "3- Para Yatırma"+yeniSatir
+ "4- Çıkış"+yeniSatir
+ "Lütfen İşleminize Devam Etmek İçin Bir Değer Seçiniz. ";

// alert(metin);

let deger = prompt(metin);

switch(deger)
{
    case "1":
        alert("Bakiyeniz: " +bakiye);
    break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek İstediğiniz Tutarı Giriniz: "));
        if(cekilecekTutar<bakiye){
            //başarılıdır
            bakiye = bakiye - cekilecekTutar;
            alert("Kalan Bakiye: " +bakiye);
        }
        else{
            alert("Bakiyenizden Fazla Para Çekemezsiniz!" +yeniSatir
            + "Bakiyeniz: "+bakiye + " " + "Çekilecek Tutar: " +cekilecekTutar);
        }
    break;

    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz: "));
        bakiye = bakiye+yatirilacakTutar;
        alert("Güncel Bakiyeniz: " +bakiye);
    break;

    case "4":
        alert("Sistemden Çıkış Yapılmıştır");
    break;

    default:
        alert("Lütfen 1 ile 4 Arasında Değer Giriniz");
    break;
     
}