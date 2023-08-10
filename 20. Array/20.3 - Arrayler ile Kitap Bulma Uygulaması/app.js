// LİBRARY APP

let book1 = { name: "Beyaz Zambaklar Ülkesinde", author: "Grigory Petrov", price: 65, shelf: "E.3.SECTION" }
let book2 = { name: "Havva'nın Üç Kızı", author: "Elif Şafak", price: 75, shelf: "C.5.SECTION" }
let book3 = { name: "Da Vinci Şifresi", author: "Dan Brown", price: 105, shelf: "B.1.SECTION" }
let book4 = { name: "Satranç", author: "Stefan Zweig", price: 35, shelf: "A.4.SECTION" }
let book5 = { name: "1984", author: "George Orwell", price: 97, shelf: "D.1.SECTION" }
let book6 = { name: "Yüzüklerin Efendisi - Yüzük Kardeşliği", author: "J.R.R. Tolkien", price: 135, shelf: "E.2.SECTION" }
let book7 = { name: "Şeker Portakalı", author: "Jose Mauro de Vasconcelos", price: 73, shelf: "B.4.SECTION" }
let book8 = { name: "Fareler ve İnsanlar", author: "John Steinbeck", price: 25, shelf: "A.5.SECTION" }
let book9 = { name: "Amok Koşucusu", author: "Stefan Zweig", price: 45, shelf: "C.4.SECTION" }
let book10 = { name: "Aynalar", author: "Eduardo Galeano", price: 52, shelf: "D.3.SECTION" }

//* Kitapları obje olarak tanımladık çünkü objeler birden fazla değeri tutabilmektedir

let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10 ];

//* Tanımladığımız objeleri bir dizi içerisinde koyduk, aslında sakladık.


//* Rafları obje olarak tanımladık çünkü aranan kitap mevcutsa ve rafta varsa 'show' kısmında yazan değer true olacak ve kitabın bulunduğu rafı gösterecek, eğer mevcut değilse 'show' kısmındaki değer false olacak ve 'Aradığınız Kitap Bulunamadı' ifadesini gösterecek
//* Bunu yapabilmemiz için kodumuzun generic yani sonradan değiştirilebilir olması gerekiyordu, bu yüzden de rafları obje olarak tanımladık ki sonradan değiştirmek istersek değiştirebilelim.
let shelfA1 = { kod: "A.1.SECTION", show: false }
let shelfA2 = { kod: "A.2.SECTION", show: false }
let shelfA3 = { kod: "A.3.SECTION", show: false }
let shelfA4 = { kod: "A.4.SECTION", show: false }
let shelfA5 = { kod: "A.5.SECTION", show: false }

let shelfB1 = { kod: "B.1.SECTION", show: false }
let shelfB2 = { kod: "B.2.SECTION", show: false }
let shelfB3 = { kod: "B.3.SECTION", show: false }
let shelfB4 = { kod: "B.4.SECTION", show: false }
let shelfB5 = { kod: "B.5.SECTION", show: false }

let shelfC1 = { kod: "C.1.SECTION", show: false }
let shelfC2 = { kod: "C.2.SECTION", show: false }
let shelfC3 = { kod: "C.3.SECTION", show: false }
let shelfC4 = { kod: "C.4.SECTION", show: false }
let shelfC5 = { kod: "C.5.SECTION", show: false }

let shelfD1 = { kod: "D.1.SECTION", show: false }
let shelfD2 = { kod: "D.2.SECTION", show: false }
let shelfD3 = { kod: "D.3.SECTION", show: false }
let shelfD4 = { kod: "D.4.SECTION", show: false }
let shelfD5 = { kod: "D.5.SECTION", show: false }

let shelfE1 = { kod: "E.1.SECTION", show: false }
let shelfE2 = { kod: "E.2.SECTION", show: false }
let shelfE3 = { kod: "E.3.SECTION", show: false }
let shelfE4 = { kod: "E.4.SECTION", show: false }
let shelfE5 = { kod: "E.5.SECTION", show: false }

let shelves = [
    [shelfE1, shelfE2, shelfE3, shelfE4, shelfE5], //Bu raf 0. index 
    [shelfD1, shelfD2, shelfD3, shelfD4, shelfD5], //Bu raf 1. index 
    [shelfC1, shelfC2, shelfC3, shelfC4, shelfC5], //Bu raf 2. index 
    [shelfB1, shelfB2, shelfB3, shelfB4, shelfB5], //Bu raf 3. index 
    [shelfA1, shelfA2, shelfA3, shelfA4, shelfA5], //Bu raf 4. index 
];


//* İki tane for tanımladık. Birinci for i değerini yani rafon indexini tutuyor ve raf uzunluğuna yani 5'e göre bir bir artıyor.
//* İkinci for j değerini yani belirlenen indexdeki (i'deki) istenilen değeri gösteriyor. Örneğin:
//* E rafının 5. Bölümü gibi
function createShelf() {
    console.clear();
    for (let i = 0; i < shelves.length; i++) {
        let line = "";
        for (let j = 0; j < 5; j++) {
            line += "|" + (shelves[i][j].show ? shelves[i][j].kod : "---") + "";
        }
        console.log(line);
        console.log("---------------------")
       
    }
}


function findKod(bookName) {
    let shelfKod = null;
    books.forEach(function (book) {
        if (book.name.toUpperCase().includes(bookName.toUpperCase())) {
            shelfKod = book.shelf;
            return; //Kitabı bulduktan sonra döngüyü sonlandırmak için
        }
    });
    return shelfKod;
}


function showShelf(shelfKod) {
    for (let i = 0; i < shelves.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (shelves[i][j].kod == shelfKod) {
                shelves[i][j].show = true;
                return; //Kitabın Rafını Gösterdikten Sonra Döngüyü Sonlandırır
            }
        }
    }
}


// Kodumuzu çalıştırmak için:
createShelf();

let bookName = prompt(" Please Enter the Name of the Book ");
let shelfKod = findKod(bookName);


if (shelfKod != null) {
    showShelf(shelfKod);
    createShelf();
} else {
    alert("The book you are looking for is not available in our library.");
}


