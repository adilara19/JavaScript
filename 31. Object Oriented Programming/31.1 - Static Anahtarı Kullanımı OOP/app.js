//? Static Nedir

class Islem{
    topla(a,b){
        console.log(a+b)
    }
    cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    bol(a,b){
        console.log(a/b)
    }
}

//* Static olarak tanımlanmamışsa, Nesne üzerinden erişilir
const islem = new Islem();
islem.topla(100,50);
islem.carp(5,7)
console.log("-------------------------------------------------------")
console.log("Static olarak tanımlanmamışsa, Nesne üzerinden erişilir. Yukarıdaki örnek static olarak TANIMLANMADI.")
console.log("-------------------------------------------------------")


//* Static olarak tanımlanmışsa Class ismi üzerinden erişilir
class mathOperation{
    static addition(c,d){
        console.log(c+d)
    }
    substraction(c,d){
        console.log(c-d)
    }
    static multiplication(c,d){
        console.log(c*d)
    }
    division(c,d){
        console.log(c/d)
    }
}

mathOperation.addition(20,10);
mathOperation.multiplication(10,10);
console.log("-------------------------------------------------------")
console.log("Static olarak tanımlanmamışsa, Nesne üzerinden erişilir. Yukarıdaki örnek static olarak TANIMLANDI.")
console.log("-------------------------------------------------------")
