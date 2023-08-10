// String Sınıfının Methodları

//* charAt() ----->
//* concat() ----->
//* indexOf() ----->
//* lastindexof() ----->
//* toUpperCase() ----->
//* toLowerCase() ----->
//* trim() ----->
//* slice() ----->
//* substring() ----->
//* replace() ----->
//* split() ----->
//* valueOf() ----->
//* startsWith() ----->
//* endsWith() ----->


//! charAt() Methodu
let course ="MODERN WEB GELİŞTİRME KURSU";
let character = course.charAt(7); // Belirtmiş olduğumuz index numarasındaki karakteri gösterir
console.log(character);


//! concat() Methodu
let date = "2023";
let total = course.concat(" ",date, " - ", "Ayşe Dilara Öztürk"); // Stringleri birleştirmek için kullandığımız bir method
console.log(total);


//! indexOf() Method
let index = course.indexOf("G"); // Karakteri verip index numarasını bulmamızı sağlıyor
console.log(index);


//! lastIndexOf() Method
let lastIndex = course.lastIndexOf("K"); // Vermiş olduğumuz kelimenin indexini gösteriyor
console.log(lastIndex);


//! toUpperCase() Method
let final = course.toUpperCase(); // Bütün harfleri büyük harfe çevirir
console.log(course);


//! toLowerCase() Method
let lowerCase = course.toLowerCase(); // Bütün harfleri küçük harfe çevirir
console.log(lowerCase);


//! trim() Method
let text = "      Bu Kurs Çok Öğretici           ";
console.log(text);
console.log(text.trim()); // gereksiz spaceleri kaldırır


//! slice() Method
console.log(course);
console.log(course.slice(7,12)); // kelime ayıklamak için kullanılır


//! substring Method
console.log(course);
console.log(course.substring(0,6)); // Bir kelime içindeki harfi çekip almaya yarar


//! replace() Method
console.log(text);
console.log(text.replace("Öğretici", "İnteraktif")); // Kelimenin yerini başka bir kelimeyle değiştirir


//! split() Method
console.log(course);
let array = course.split(" ");
console.log(array);


//! valueOf() Method


//! startsWith() Method
console.log(course);
console.log(course.startsWith("M"));
console.log(course.startsWith("S"));


//! endsWith() Methodu
console.log(course);
console.log(course.endsWith("KURSU"));