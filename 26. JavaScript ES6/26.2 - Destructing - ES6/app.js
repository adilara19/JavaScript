// DESTRUCTING KULLANIMI

let langs = ["C#", "JavaScript", "C++", "Python"]
let [lang1,lang2,lang3,lang4] = langs
console.log(lang1, lang2, lang3, lang4)


const calculate = (a,b) =>{
    const plus = a+b
    const minus = a-b
    const times = a*b
    const divide = a/b


    const array = [plus,minus,times,divide]
    return array
}

let [a,b,c,d] = calculate(10,2)

console.log(a,b,c,d )

const person = {
    firsName: "Dilara",
    lastName: "Öztürk",
    salary: 5000,
    age: 22,
}



let {firsName:isim, lastName:soyisim, salary:maas, age:yas} = person

console.log(isim, soyisim, maas, yas)