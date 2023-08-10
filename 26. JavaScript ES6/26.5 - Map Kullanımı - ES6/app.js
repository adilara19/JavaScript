// Map: Array Çeşitidir. key, value mantığıyla çalışır

const map1 = new Map();

// Map'in içine değer koyabilmek için "set" methodunu kullandık.
map1.set(1, "Bal")
map1.set(true, 5)
map1.set([1,2,3], {firstName: "Ayşe Dilara", lastName: "Öztürk"})
map1.set(false, 46)

console.log(map1)
console.log("----------------------------------------------------------")
console.log("Map'in içerisine key, value olarak değer koyuyoruz ve koyacağımız değerlerin tipleri ve cinsleri hiç fark etkiyor. [array,string,boolean,number] hiç fark etmeksizin her şekilde çalışıyor.");
console.log("----------------------------------------------------------")


let value;
const map2 = new Map();

map2.set(34, "İstanbul")
map2.set(35, "İzmir")
map2.set(36, "Kars")
map2.set(37, "Kastamonu")



// Map'in içine değer koyabilmek için "get" methodunu kullandık
console.log(map2.get(36));
console.log(map2.get(34));

//Map'in size'ını alabilmek için
value = map2.size;
console.log(value);

// Map'in içinden Değer Silmek için "delete" methodunu kullandık.
value = map2.delete(34)

console.log(value); // Silme işleminin başarılı bir şekilde tamamlandığını dönen true mesajından anlıyoruz
console.log(map2.size); // Sildikten sonra size 3 oldu


// Map'in içerisinde bir değerin var olup olmadığını sorgulamak için "has" methodunu kullandık
console.log(map2.has(35)); //35 mapin içinde olduğu için true döner
console.log(map2.has(55)); // 55 mapin içinde olmadığı için false döner

// Map üzerinde "for of" methoduyla dönebiliriz
for(let [key,value] of map2){
    console.log(key,value);
}

// Map'ten Array'e çevirme
const array = Array.from(map2);
console.log(map2);

// Array'i Map'e çevirme
const array2 = [
    [332, "Çikolata"],
    [333, "Badem"],
    [334, "Fıstık"],
    [335, "Çerz"]
]
const myMap = new Map(array2);
const myArray = Array.from(myMap);
console.log(myArray);
