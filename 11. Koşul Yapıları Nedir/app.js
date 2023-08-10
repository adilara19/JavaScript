// KOŞUL YAPILARI

// let not = 35;

// if(not>50){
//     console.log("Geçtiniz, notunuz:" +not);
// }
// else{
//     console.log("Kaldınız, notunuz: " +not);
// }

// let yas = Number(prompt("Yaşınız: "));
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz: "));
// console.log(typeof para);

// if(yas>18 && para>=3000){
//     alert("Ehliyet Sınavına Katılabilrsiniz!");
// }
// else{
//     alert("Ehliyet Sınavına Katılamazsınız.");
// }


//DERS ORTALAMASI BULMA ÖRNEĞİ

//vize1 %40, vize2 20%, final %40

let midterm = Number(prompt("Midterm Notunuzu Giriniz: "));
let quiz = Number(prompt("Quiz Notunuzu Giriniz: "));
let final = Number(prompt("Final Notunuzu Giriniz: "));

let average = (midterm * 0.4) + (quiz * 0.2) + (final * 0.4);

if(average>=60){
    alert("Dersten geçtiniz, Tebrikler!");
    console.log("Dersten Geçtiniz, Tebrikler!");
}
else{
    alert("Dersten Kaldınız, Geçmişler Olsun!");
    console.log("Dersten Kaldınız, Geçmişler Olsun!");
}

/*
vize1'in yüzdeliği 30%
vize2'nin yüzdeliği 30%
final'in yüzdeliği 40%
dolayısıyla 30/100 yani 3/10 yani 0.3
yine aynı şekilde 40/100 yani 4/10 yani 0.4
*/