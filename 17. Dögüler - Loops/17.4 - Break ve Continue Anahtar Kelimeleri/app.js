
//* Break döngüden çıkmak için kullanılan anahtar kelimedir

//1 den 10 a kadar sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım

// let sayac = 1;
// while(sayac<=10){
//     console.log(sayac);
//     if(sayac==8){
//         break;
//     }
//     sayac++
// }


// 0 dan 25 e kadar olan çift sayıları yazdıralım ve 18 e geldiğimizde döngüden çıkalım
let evenNumbers = 0;
let total = 0;

while(evenNumbers<=25){
    if(evenNumbers==18){
        break;
    }

    if(evenNumbers % 2 == 0){
        console.log("Even Numbers: ", evenNumbers);
    total+=evenNumbers;
    }

    evenNumbers++;
}

console.log("Total: ", total);


//* Continue döngüyü sadece tek bir kez kırmayı sağlar
// 1 2 3 4 5 6 7 '8' 9 10 ------> yani 8'i yazdırmayı istemiyoruz ama döngü devam etsin istiyoruz.

let sayi = 0;
while(sayi <= 15){
    sayi++;
    if(sayi>13){
        break;
    }
    if(sayi==8){
        continue;
    }
    console.log(sayi);
}