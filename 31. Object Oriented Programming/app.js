// OOP Giriş

// Class Oluşturmak
/*

Bir Class'ın içerisinde;
- Özellikler
- Yapıcı Method
- Function


*/
class Human {
    constructor(isim,soyisim, yas, maas) { //yapıcı method 
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    showInfos(){
        console.log(
            ` 
              İsim: ${this.isim} 
              Soyisim: ${this.soyisim} 
              Yaş: ${this.yas} 
              Maaş: ${this.maas}
              `
            )
    }
}

// Nesne Oluşturmak
const human1 = new Human("Ayşe Dilara", "Öztürk", 22, 50000);
const human2 = new Human("Melisa", "Güneşer", 22, 60000);
const human3 = new Human("Dilem Rumet", "Başak", 25, 75000);
const human4 = new Human("Burcu", "Orhan", 23, 45000);

human1.showInfos()
human2.showInfos()
human3.showInfos()
human4.showInfos()