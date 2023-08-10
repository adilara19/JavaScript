// Var - Let - Const

//? Java Scriptte Değişken Nasıl Tanımlanır?
// var/let/const degiskenIsmi = degiskenDegeri;

//ör: let sayi = 10;
//Sayı isimli değişkene 10 değerini atadık

function selamVer(){
    var selam = "Herkese Selam"; //tanımlamış doluğumuz değer kıvırcık parantez içerisinde tanımlandığı için bu "Scope" çeşitlerinden function scope oluyor.

    console.log(selam);

}

selamVer();



/*
? Var
*RAM bellekte çok fazla yer kaplar
* var ile tanımlanmış her şey <function scope> oluyor
* var hem <global hem function hem de block scope> olabilen bir değişkendir






* var x=10; dediğimiz her şey global scope oluyor
ayrıca var kullanarak zaten halihazırda tanımladığımız bir değişkenin değerini tekrardan değiştirebiliriz.
ör: 
var a = 5;
var a = 10;
bu örnekte a değişkenine atanan değer 5 iken yeni atanan değer 10 oldu, dolayısıyla console tarafında yazdırdığımızda bu a değişkeninin değeri en son hali olan 10 olacaktır.




? Let - Const
*block scope özelliğine sahiptirler



* if(true){
}
dediğimiz her şey block scope oluyor, çünkü kıvırcık parantezlerin içerisine yazdığımız kodlar bir block içerisinde barındırılıyor




*if(true){
    let b = 10;
}

console.log(b);

dersek, yani console tarafında yazdırmak istediğimiz değişkeni kıvırcık parantezlerin dışına yazarsak, bu durum bize hata verir ve çalışmaz
çünkü bu değişken tipinin block scope özelliği olduğu için, bir block (kıvırcık parantezlerin) içerisine yazılmalıdır.

let ve const'ta aynı isimli değişkene farklı değerler atanamaz (var'dan farklı) 
örneğin:

if(true){
    let a = 5;
    let a =10;
    
    console.log(a);
}

dersek ve a değişkeninin değerini console ekranında görmek istersek hata alırız,
çünkü a değeri block scope'ta yalnızca bir kez tanımlanabilir. Bu durumda hata almamak için yapılması gereken şey değişken isminin değiştirilmesidir.
örneğin:

if(true){
    let a = 5;
    let b =10;
    
    console.log(a);
    console.log(b);
}


? LET & CONST
* const=constant yani sabit, değişmez

cons a = 10;
a = 15;
console.log(a);

dersek console ekranında hata alırız çünkü const ile tanımladığımız değişken sabit ve değiştirilemez bir değişkendir ve ona yeni bir değer atanamaz

* bu durum let'te farklıdır
örneğin: 

let a = 10; ------------> console ekranında 10 yazar
a = 7; -----------------> console ekranında 7 yazar
a = 22; ----------------> console ekranında 22 yazar


*/