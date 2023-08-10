// 1 den 10 a kadar yazdıralım

let sayac = 1;

while(sayac<=10){

    console.log(sayac);

    sayac++;
}

//1 den 10 a kadar tek sayıları yazdıralım

let odd = 0;

while(odd<=10){
    if(odd%2==1){
        console.log("Tek Sayılar: ",odd);
    }

    odd++;
}

//1 den 10 a kadar çift sayıları yazdıralım
let even = 0;

while(even<=10){
    if(even%2==0){
        console.log("Çift Sayılar: ",even);
    }

    even++;
}

let loop = 1;
while(true){
    console.log(loop);
    if(loop==7){
        break; //sonsuz döngüden kurtarmak için kullanılır
    }
    loop++;
}