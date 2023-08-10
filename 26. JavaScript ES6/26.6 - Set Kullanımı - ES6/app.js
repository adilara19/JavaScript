// SET: Array Çeşitidir. Bir Değerin Yalnız Bir Kere Tutulmasını Sağlar
const set = new Set();

// değer verebilmek için add methodunu kullanıyoruz

set.add(true)
set.add(3.14)
set.add("Dilara")
set.add(7)
set.add({username: "Dilara", password: "19"});
set.add([1,2,3])

// size
console.log(set.size);

//delete
set.delete(7)
console.log(set.size) 

//has
console.log(set.has("Dilara"))
console.log(set.has("Melisa"))

//for of döngüsü
for(let value of set){
    console.log(value)
}

// SET'den Array Oluşturma
const values = Array.from(set);
console.log(values)

// Array'den SET Oluşturma
let array = [1, false, "Dilara", true, [1,0,86], "Bal"]

const newSet = new Set(array);
console.log(newSet)
