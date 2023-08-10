// EVENTS

function changeTitle(){
    document.querySelectorAll('.card-title')[1].textContent = "Todo Başlığını Değiştirdik!";
    console.log("Başlık Değişti");
}

//* HTML kodumuzda 'onclick' ile özellik atayıp, bunu app.js'e bağladık. Dolayısıyla sayfaya girip "Tüm ToDoları Temizle" butonuna tıkladığımız zaman "Todo Listesi ----------> Todo Başlığını Değiştirdik!" olarak değişti




//* addEventListener() Methodu event eklemej için kullanılır
const addButton = document.querySelector("#todoAddButton");

addButton.addEventListener("click", function(){
    alert("Merhaba");
});
