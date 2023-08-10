// break: bir case'in sonuna konularak o case'de belirtilen koşul sağlandığı an başka bir case'i çalıştırmamak için kullanılır.


let sayi = prompt("Lütfen 1 ile 5 Arasında Bir Sayı Giriniz: ");

switch(sayi) // "1" "2" "3" "4" "5"
{
    case "1":
        //kodlarınız
        console.log("Girilen Sayı 1'dir ");
    break;

    case "2":
        console.log("Girilen Sayı 2'dir ");
    break;

    case "3":
        console.log("Girilen Sayı 3'dür ");
    break;

    case "4":
        console.log("Girilen Sayı 4'dür ");
    break;

    case "5":
        console.log("Girilen Sayı 5'dir ");
    break;

    default:
        console.log("Girilen Sayı 1 ile 5 Arasında Olmalıdır! ");
}

