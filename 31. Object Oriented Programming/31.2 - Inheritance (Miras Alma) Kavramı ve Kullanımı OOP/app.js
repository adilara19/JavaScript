//? INHERITANCE (MİRAS ALMA) KAVRAMI

/*

Bir sınıf miras alındığı zaman o sınıfın özellikleri ve methodları da miras alınır.

*/


// Inheritance Kullanmadan
class Person{
    firstName = "Dilara";
    write(){
        console.log(this.firstName);
    }
}

const person = new Person();
person.write();
console.log("-------------------------------")


// Inheritance Kullanarak
class Student extends Person{
    write(){
        console.log("Person Sınıfından Geldi:", this.firstName)
    }

}

const student1 = new Student();
student1.write();

