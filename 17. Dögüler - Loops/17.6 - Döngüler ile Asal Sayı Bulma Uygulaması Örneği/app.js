//ASAL SAYI BULMA UYGULAMASI

/*

Asal Sayılar: 1,2,3,5,7,11,13,17,19...


*/

let a = Math.floor(7.15); //Math.floor ondalık bir sayıyı en yakın tam sayıya yuvarlar
console.log(a);

let sayi = Number(prompt("Lütfen Bir Sayı Giriniz: "));
let sonuc = true;
for(let i = 2; i <= Math.floor(sayi/2); i++){
    if(sayi % i == 0){
        //Asal Değildir
        sonuc = false;
        break;
    }
}

if(sonuc){
    alert(sayi + " Asal Sayıdır.");

}else{
    alert(sayi + " Asal Sayı Değildir!");
}