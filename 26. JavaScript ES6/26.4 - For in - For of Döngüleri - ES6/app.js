// For in - For of Loop
let names = ["Melisa", "Dilara", "Burcu", "Ferda", "Dilem", "Bal"];

names.forEach(name=>console.log(name)) // Arrow Function ile Tanımladık
console.log("1- Array'in İçindekileri Getirmesini İstedik")



// For in Döngüsü: Bir dizi üzerinde dönerken o dizinin her bir elemanının index numaralarını verir
for(let name in names){
    console.log(name, names[name])
}

console.log("2- For in Döngüsü Kullandığımız için Sadece İndex Numaraları Geldi, Ufak Bir Kodla Yanlarına Değerlerini de Yazdırdık")

// For of Döngüleri: Bir dizideki değerleri getirir
for(let isim of names){
    console.log(isim)
}

console.log("3- For of Döngüsü ile Array'de Bulunan Değerleri, İndex Numaralarını Yazdırmadan Getirdi")