//? CALLBACK NEDİR?

function getName(callback) {
    setTimeout(() => {
        //Servisten ismimi getirdi.
        console.log("Dilara");
        callback();
    }, 1000);
    
}

function getSurname() {
    setTimeout(() => {
        //Servisten soyismimi getirdi.
        console.log("Öztürk");
    }, 500);
    
}

getName(getSurname)
// getSurname();

// Yukarıdaki kod Asenkron çalışan bir koddur çünkü timeslot içerisinde olaylar gerçekleşir. Bu durumdan kurtulmak için callback functionlara ihtiyacımız olacak.
//* callback = getSurname oldu. Çünkü biz getSurname'i aldık ve callback isimli parametreye setledik. Yani callback artık getSurname'i tutuyor.




// Callback: bir fonskiyonu, bir fonksiyona parametre geçerek asenkron yapıyı senkrona çevirir.

function yazdir(callback){
    setTimeout(()=>{
        console.log("1998")
        callback();
    }, 2000)
}

function oku(){
    setTimeout(() => {
        console.log("Havva'nın Üç Kızı");
    }, 700);
}

yazdir(oku);
// oku();

//* callback = oku oldu. Çünkü biz oku'yu aldık ve callback isimli parametreye setledik. Yani callback artık oku'yu tutuyor.
