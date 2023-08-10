
//! Debugger Nedir?
//derleyicinin kodları okumaya başlayacağı yer imleci olarak düşünülebilir. JavaScript'te bulunan debugger anahtar kelimesi ile kodlarımızın içerisinde kesme noktaları oluşturabilir ve tarayıcılarda bulunan yerleşik hata ayıklayıcılar ile kodlarımızı adım adım inceleyebiliriz.


let a = 1;
let b = 2;
let c = a + b;
let d = a + b + c;
debugger
let e = a + b + c;

let final = a + b + c + d + e;
console.log("Final: ", final);