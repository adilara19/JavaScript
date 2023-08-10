// GERİYE DEĞE DÖNDÜREN METHOD TANIMLAMA: RETURN
//? Return: - Bir değeri methodun dışarısına çıkarmak, taşımak için kullanılır.
//?         - Bir methodu bitiren anahtar kelimedir.
            

//? Void: - Geriye Değer Döndürmeyen Anahtar Kelimeler İçin Kullanılır.

//* 3 Rakamının Kübünün Döndürülmesi
let donecekDeger = cube(3);
console.log(donecekDeger);

function cube(sayi){
    let sonuc = sayi * sayi * sayi;
    return sonuc; // return'ün döndürdüğü değer methodun çağrıldığı yere gider. yani cube ile belirlediğimiz methoda gider
}


//* 5 Rakamının Karesinin Döndürülmesi
let returnedValue = square(5);
console.log(returnedValue);

function square(number){
    let equal = number * number;
    return equal;
}


//* 2 Rakamının 4. Kuvvetinin Döndürülmesi
let returnedFourthPower = fourth(2);
console.log(returnedFourthPower);

function fourth(value){
    let equation = value * value * value * value;
    return equation;
}



//* Daha Önce Bir Methodda Kullanmış Olduğumuz Değeri Başka Bir Method İçin Tekrar Kullanalım
let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(sayi){
    let sonuc = sayi * sayi;
    console.log(sonuc);
}

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

  