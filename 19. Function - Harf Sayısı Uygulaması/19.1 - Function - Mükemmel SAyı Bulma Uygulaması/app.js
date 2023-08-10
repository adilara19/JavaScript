// MÜKEMMEL SAYI UYGULAMASI

 // 6'yı tam bölen sayılar: 1, 2, 3, 6
 // 6'yı bölen sayıların toplamı: 1+2+3+6 = 12
 // 6'yı tam bölen sayıların toplamı 6'nın 2 katına eşitse bu mükemmel sayı anlamına gelir.
 //1+2+3+6 = 12     6*2= 12     12=12 ------> Mükemmel Sayı


perfectNumber(496);

 function perfectNumber(number){
    let toplam = 0;
    for(let i = 2; i<=number/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    } 
    toplam+=1+number;

    if(toplam==number*2){
        console.log("Mükemmel Sayıdır!");
    }else{
        console.log("Mükemmel Sayı Değildir!");
    }
 }