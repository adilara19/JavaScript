// this: bulunduğu sınıfı göterir
// super: üst sınıfı gösterir
// super()



//* this
class Person{
    firstName = "Dilara";
    write(){
        console.log(this.firstName);
    }
}

const person = new Person("Dilara");
person.write();




//* super
class Students extends Person{
    write(){
        super.write(); // Üst sınıfın içindeki write methoduna gitmesi için
    }
}

const student1 = new Students();
student1.write();





//* super()
class Languages{
    constructor(motherLang, bilingual, anotherLang){
        this.motherLang = motherLang;
        this.bilingual = bilingual;
        this.anotherLang = anotherLang;
    }
    write(){
        console.log(this.motherLang);
    }
}
const spokenLang = new Languages("Turkish");
spokenLang.write();



// Örnekler
class Kisi{
    constructor(isim, soyisim, maas){
        this.isim = isim;
        this.soyisim = soyisim;
        this.maas = maas;
    }
    bilgileriYazdir(){
        console.log(this.isim, this.soyisim, this.maas)
    }
}

class Calisan extends Kisi{
    constructor(isim, soyisim, maas){
        super(isim, soyisim, maas);
    }

    bilgileriYazdir(){
        super.bilgileriYazdir();
    }
}

const calisan1 = new Calisan("Ayşe Dilara", "Öztürk", 50000);
calisan1.bilgileriYazdir();

class Schools{
    constructor(nameOfUniversity, locationOfUniversity, buildYear, studentCapacity){
        this.nameOfUniversity = nameOfUniversity;
        this.locationOfUniversity = locationOfUniversity;
        this.buildYear = buildYear;
        this.studentCapacity = studentCapacity;
    }

    writeInfo(){
        console.log(this.nameOfUniversity, this.locationOfUniversity, this.buildYear, this.studentCapacity)
    }
}

class Universities extends Schools{
        constructor(nameOfUniversity, locationOfUniversity, buildYear, studentCapacity){
            super(nameOfUniversity, locationOfUniversity, buildYear, studentCapacity);
        }

        writeInfo(){
            super.writeInfo();
        }
}

const university1 = new Schools("Doğu Akdeniz Üniversitesi", "Mağusa", "1986", 1000000);
university1.writeInfo(); 