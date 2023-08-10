//1 den 10 a kadar yazdıralım

let sayac = 1;
do{
    console.log(sayac);
    sayac++;
}
while(sayac <= 10);


//Do-While'da koşul sağlamasa da kod en az bir kez çalışır, bu durum while döngüsü ile do-while döngüsü arasındaki tek farktır.
// let age = 22;

// do{
//    console.log("Ehliyet alabilirsiniz!");

// } while(yas>=25);





//1 den 20 ye kadar olan tek sayıların toplamını bulalım.
let number = 1;
let total = 0;
do{
    if(number%2==1){
        total+=number;
    }
    number++;
}while(number <=20);
console.log("Total:", total);