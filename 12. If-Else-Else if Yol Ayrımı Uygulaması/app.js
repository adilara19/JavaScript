// If-Else 2 ihtimalin olduğu yerlerde kullanılır
// if else if else: 2 den fazla seçeneğin olduğu yerde kullanılır.
// if if if: her bir koşulun ayrı bir koşulmuş gibi çalışması durumunda kullanılır.

let secilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz :");

if(secilenYol == 1){
    alert("Seçilen Yol " + secilenYol + ". Yoldur.");
}
else if(secilenYol == 2){
    alert("Sçilen Yol " + secilenYol + ". Yoldur.");
}
else if(secilenYol == 3){
    alert("Seçilen Yol " + secilenYol + ". Yoldur.");
}
else{
    alert("Lütfen Geçerli Bir Yol Seçiniz!!");
}