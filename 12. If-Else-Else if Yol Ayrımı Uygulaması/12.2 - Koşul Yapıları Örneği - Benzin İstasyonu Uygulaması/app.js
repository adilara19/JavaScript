// Benzin İstasyonu 

/*

1- Euro Diesel : 19.46
2- Benzin :
    2.1- Kurşunsuz Benzin 95 : 21.40
    2.2- Kurşunsuz Benzin 98 : 21.72
3- Gazyağı : 19.04


Gelen Müşteriden Alacağımız Bilgiler;
1- Yakıt Tipi
2- Yüklenecek Yakıt Litresi
*/

let diesel = 19.46, kursunsuz95 = 21.40, kursunsuz98 = 21.72, gazyagi = 19.04;

const yeniSatir = "\r\n";

const yakitMetni = "1- Euro Diesel" + yeniSatir
    + "2.1- Kurşunsuz Benzin 95" + yeniSatir
    + "2.2- Kurşunsuz Benzin 98" + yeniSatir
    + "3- Gazyağı" + yeniSatir
    + "Yakıt Türünü Seçiniz: ";

let yakitTipi = prompt(yakitMetni);
if (yakitTipi == "1" || yakitTipi == "2.1" || yakitTipi == "2.2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Yakıt Litresini Giriniz: "));
    let bakiye = Number(prompt("Bakiyenizi Giriniz: "));

    if (yakitTipi == "1") {
        //Diesel
        let odenecekTutar = diesel * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi Başarılır!" + yeniSatir
                + "Kalan Bakiye: " + bakiye);
        }
        else {
            //bakiye yetersiz
            alert("Bakiyeniz Yeterli Değildir" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye));
        }
    }
    else if (yakitTipi == "2.1") {
        //Kurşunsuz Benzin 95
        let odenecekTutar = kursunsuz95 * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi Başarılır!" + yeniSatir
                + "Kalan Bakiye: " + bakiye);
        }
        else {
            //bakiye yetersiz
            alert("Bakiyeniz Yeterli Değildir" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye));
        }
    }
    else if (yakitTipi == "2.2") {
        //Kurşunsuz Benzin 98
        let odenecekTutar = kursunsuz98 * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi Başarılır!" + yeniSatir
                + "Kalan Bakiye: " + bakiye);
        }
        else {
            //bakiye yetersiz
            alert("Bakiyeniz Yeterli Değildir" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye));
        }
    }
    else if (yakitTipi == "3") {
        //Gazyağı
        let odenecekTutar = gazyagi * yakitLitresi;
        if (odenecekTutar < bakiye) {
            //bakiye yeterli
            bakiye = bakiye - odenecekTutar;
            alert("Yakıt Alma İşlemi Başarılır!" + yeniSatir
                + "Kalan Bakiye: " + bakiye);
        }
        else {
            //bakiye yetersiz
            alert("Bakiyeniz Yeterli Değildir" + yeniSatir
                + "Ödenecek Tutar: " + odenecekTutar + yeniSatir
                + "Bakiye: " + bakiye + yeniSatir
                + "Eksik Tutar: " + (odenecekTutar - bakiye));
        }
    }
}


else {
    alert("Lütfen Geçerli Bir Yakıt Tipi Seçiniz!");
}
