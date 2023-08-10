// 1 den 10 a kadar sayıları yazdıralım

for(let i = 1; i<=10; i++){
    console.log(i);
}

// Önce değişken tanımlanır.
// Sonra koşul belirlenir.
// Sonra arttırma-azaltma işlemi yazılır.
// Derleyici kodları okurken önce tanımlanan değişkene bakar, sonra koşula bakar, koşul sağlıyorsa bir arttırır. Koşul sağlanmayana kadar döngü devam eder. ve koşul sağlanmadığı an döngüden çıkılır.


// 1 den 10 a kadar tek sayıları yazdıralım
for(let k = 1; k<=10; k=k+2){
    console.log("Tek Sayılar: ", k);
}

// 1 den 10 a kadar çift sayıları yazdıralım
for(let j = 0; j<=10; j=j+2){
    console.log("Çift Sayılar: ", j);
}

for(let m = 1; m<=10; m++){
    if(m%2==1){ //m'in ikiye bölümünden kalan tek ise;
        console.log("Bu bölme işleminde kalan 'TEK SAYIDIR'"); // kalan TEK SAYIDIR yazdır
    }
    else{ // m'in ikiye bölümünden kalan çift ise;
        console.log("Bu bölme işleminde kalan 'ÇİFT SAYIDIR'"); // kalan ÇİFT SAYIDIR yazdır
    }
}

//50 den 1 e kadar gidelim ve toplamlarını bulalım.

let total = 0;
for(let s = 50; s>=1; s--){ //50'den başla, 1'e kadar git ve her defasında bir azalt
    total = total + s;
    console.log(s);
}

console.log("Total: ", total);