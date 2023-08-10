// Çoklu İf Yapısı

/*

kullanıcının adını ve tckn alacağımız bir form yaprığımızı düşün

Koşul1:
Ad: boş geçilemez

Koşul2: 
TCKN: 11 karakterden uzun veya kısa olamaz

*/

let adSoyad = prompt("Ad ve Soyadınızı Giriniz: ");
let tckn = prompt("TCKN giriniz: ");


// checkAdSoyadveTCKN(adSoyad, tckn);
// checkAdSoyadTCKN(adSoyad, tckn);

checkFullNameAndTCKN(adSoyad, tckn);


// If-Else Yapısını Kullandık
function checkAdSoyadveTCKN(adSoyad, tckn) {
    if (adSoyad != "") {
        if (tckn.length == 11) {
            console.log("İsim ve TCKN Başarıyla Girildi!");
        }
        else {
            console.log("Lütfen TC Kimlik Numaranızı 11 Karakter Olarak Giriniz!");
        }
    }
    else {
        console.log("Lütfen İsim Alanını Boş Bırakmayınız!!");
    }
}

// If-If Yapısını Kullandık
function checkAdSoyadTCKN(adSoyad, tckn) {
    if (adSoyad == "") {
        console.log("Lütfen Ad Soyad Kısmını Boş Bırakmayınız!!! ");
        return;
    }
    if (tckn.length != 11) {
        console.log("Lütfen TC Kimlik Numaraınızı 11 Karakter Olarak Giriniz!");
        return;
    }

    console.log("İsim ve TCKN Başarıyla Girildi! ");
}


//Veya Operatörü ile yaptık
function checkFullNameAndTCKN(adSoyad, tckn) {
    if (adSoyad == "" || tckn == "") {
        console.log("Ad Soyad veya TCKN Boş Olamaz!")
    } else {
        if (tckn.length == 11) {
            console.log("Ad Soyad: " + adSoyad + " " + " TCKN: " + tckn)
        } else {
            console.log("TCKN 11 karakterden az veya fazla olamaz!")
        }
    }
}

