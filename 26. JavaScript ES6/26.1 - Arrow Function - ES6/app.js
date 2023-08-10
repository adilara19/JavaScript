// ARROW FUNCTION

//*ECMAScript'ten önce arrow functions bu şekilde yazlırken;
function print() {
    console.log("Merhaba!");
}

print();


//* ECMAScript'ten sonra bu şekilde yazılır.
const yazdir = () => {
    console.log("Merhaba?");
}

yazdir();


//* Eğer kodumuz tek bir satırdan oluşuyorsa kıvırcık parantezleri kaldırabiliriz
const text = (firstName, lastName) => console.log("Merhaba,", firstName, lastName);

text("Ayşe Dilara", "Öztürk");


//* Aşağıdaki kod tek satırdan oluşan bir kod olduğu için ve tek bir parametre barındırdığı için parantezleri kaldırdık.
const name = fullName => console.log("Merhaba,", fullName);

name("Melisa Güneşer");



//* Cube isimli fonkisyonumuz tek bir parametreden ve tek bir satırdan oluştuğu için; parantezleri kaldırabiliriz. Parantezleri kaldırdığımız zaman return fuction'a artık ihtiyacımız olmadığı için onu da kaldırabiliriz.
const cube = (x) =>{
    return x*x*x
}

console.log("Value: ", cube(3))


//* Aşağıdaki kod tek parametreden ve tek satırdan oluşan bir kod olduğu için parantezleri ve return function'ı kaldırdık.
const kupAl = y =>y*y*y

console.log("Değer: ", kupAl(5))

