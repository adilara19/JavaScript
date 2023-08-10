

//Parametreli Method Tanımlama



//* İsim-Soyisim Yazdırma
function yazdir(isim, soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("Dilara", "Öztürk");
yazdir("Ali", "Cabbar");





//* Bir Sayının Kübünü Yazdırma
function cube(sayi){
    console.log(sayi*sayi*sayi);
}

cube(5);
cube(3);




//* Ehliyet için Yaş Parametresi Belirleme
let age = Number(prompt("Yaşınızı Giriniz: "));
control(age);


function control(age){
    if(age>18 || age==18){
        console.log("Ehliyet Alabilirsiniz! :)");
    }else{
        console.log("Ehliyet Alamazsınız! :(");
    }
}

