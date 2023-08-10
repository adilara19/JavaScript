// BİR METİN İÇERİSİNDEKİ KELİME SAYISI BULMA UYGULAMASI


let text = "Şu anda Ankara'da JavaScript Eğitimi Öğrenmekteyim!";

let word = prompt("Harfi Giriniz");

let equal = find(word);
alert("Harf Sayısı: " + equal);

function find(word){
    let total = 0;
    for(let i = 0; i<text.length; i++){
        if(text.charAt(i).toLowerCase()===word.toLowerCase()){

            total += 1;
        }
    }
    return total;
}

