//* JavaScript "SENKRON" Çalışan Bir Programlama Dilidir!

console.log("1"); // Derleyici yukardan aşağıya doğru okuduğu için, önce 1 sonra 2 en son da Dilara çıktı olarak görünür
console.log("2");
console.log("Dilara");

function hello(){
    console.log("Hello!");
}

hello(); //  Methodu en sona koyduğumuz için en son okudu. En başa koysaydık en başta okunacaktı.
// İşte Bu yüzden JavaScript Senkron çalışan bir programlama dilidir. Fakat bazı durumlarda Asenkron çalışır.

console.log("-------------");


/*
! JavaScript'in en sık "ASENKRON" çalıştığı yerler;
* 1-) Timing
* 2-) Event
* 3-) Http İsteklerinde
*/

/* 
! Asenkron Mantığı
* Senkron çalışanlar Asenkron çalışanları beklemeden çalışmaya başlar
* Asenkron çalışanlar birbirlerine göre hareket edip çalışmaya başlar
*/



console.log("Dilara");  // Senkron

setTimeout(() => {
    console.log("1 saniye sonra çalıştı") //Asenkron
}, 1000);              

setTimeout(() =>{
    console.log("Yarım saniye sonra çalıştı") //Asenkron
}, 500);

setTimeout(()=>{
    console.log("7 saniye sonra çlıştı") //Asenkron
}, 7000);
console.log("Öztürk"); // Senkron

/*

Aralarında sadece setTimeout() asenkron olduğu için, senkron olanlar onun çalışmasını beklemeden çalıştı.
Bu yüzden çıktı;

Dilara
Öztürk
Yarım saniye sonra çalıştı
1 saniye sonra çalıştı
7 saniye sonra çalıştı

olarak karşımıza geldi.
*/
