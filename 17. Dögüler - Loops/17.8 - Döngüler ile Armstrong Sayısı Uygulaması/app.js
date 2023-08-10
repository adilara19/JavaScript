// ARMSTRONG SAYISI UYGULAMASI
//* Bir sayının, her bir rakamının küpünün toplamı kendisini veriyorsa o sayıya armstrong sayısı denir. örneğin;
//* 153 --------> 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

let number = prompt("Bir Sayı Giriniz: ");
let total = 0;


for(let i = 0; i<number.length; i++){ //0'dan başlayıp ikinci indexe kadar döndürdük
    let digits = number.charAt(i)
    total+=digits*digits*digits;
}

if(Number(number)==total){
    alert("Armstrong Sayısıdır :)");
}else{
    alert("Armstrong Sayısı Değildir :(");
}