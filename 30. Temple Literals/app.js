// TEMPLATE LITERALS

//* Stringleri birleştirmek için kullanılır


// Template Literals Olmadan Önce
function write (firstName, lastName){
    console.log("İsim: " + firstName + " " + "Soyisim: " + lastName)
}

write("Ayşe Dilara", "Öztürk")

// Template Literals ile kullanmak ALT GR + iki kez noktalı virgül tuşu
function yazdir(ad, soyad){
    console.log(`İsim: $(ad) Soyisim: $(soyad)`)
}

write("Melisa", "Güneşer")

