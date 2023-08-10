// Spread Operatörü "..." 

let numbers = [10,20,30,40]
function add(a,b,c,d){
    console.log(a+b+c+d)
}

// Eski Yöntem
add(numbers[0], numbers[1], numbers[2], numbers[3])

// Yeni Yöntem
let sayi = [5,10,15,20]
function toplam(x,y,z,r){
    console.log(x+y+z+r)
}

add(...sayi) // ... spread operatörüdür




//* Spread Operatörü Bir Diziyi Başka Bir Diziye Bağlarken de Kullanılır
// Eski Yöntem
const lang1 = ["Java", "C#"]
const lang2 = ["Php", "Python", lang1[0], lang1[1]]

console.log(lang2)


// Yeni Yöntem
const diller1 = ["İngilizce","Türkçe"]
const diller2 = ["Fransızca", "İtalyanca", ...diller1]
console.log(diller2)


//* index numaralarına atadık
const numeric=[1,2,3,4,5,6,7,8,9]

let [m,n, ...leftNum] = numeric
console.log(m,n, leftNum)




//* Eski Yöntemle bir arraydaki değerleri index numaralarına göre yeni bir arraya yazdırma
const array1 = ["Ayşe", "Dilara", "Öztürk", "19331157"]
const array2 = []

array2[0] = array1[0]
array2[1] = array1[1]
array2[2] = array1[2]
array2[3] = array1[3]

console.log(array2)




//* Yeni Yöntemle çok daha kolay bir şekilde spread operatörü sayesinde bu işlemi yaptık
const isim1 = ["Melisa", "Güneşer","Kadın","123456789"]
let isim2 = []

isim2 = [...isim1]
console.log(isim2)
