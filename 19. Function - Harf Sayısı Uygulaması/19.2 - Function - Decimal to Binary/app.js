//DECIMAL TO BINARY CONVERSION


convertDecimalToBinary(8); // 8 Rakamı bizim Decimal Value dediğimiz değerimiz. Biz bu değeri Binary Cinsine Çevirmek İstiyoruz.

function convertDecimalToBinary(number){
    let binary = "";
    while(true){
        binary += (number % 2).toString(); // Decimal Cinsinden olan bir değeri Binary Cinsine çevirebilmemiz için o sayıyı ikiye bölüp kalanını almamız ve kalan sıfır çıkana kadaar bu işlemi devam ettirmemiz gerekiyor. 
        number = Math.floor(number / 2);
        if(number === 0){ // Kalan sıfır çıkınca bölme işlemi biter
            //Bölme işlemi bitti, döngüden çıkılacak.
            break;
        }
    }
    console.log("Binary Sayı: "+ binary);

    let result = reverse(binary); // Bulmuş olduğumuz Binary Cinsindeki sayının tersini alabilmek için aşağıdaki kod parçasını yazdık
    console.log("Tersine Çevrilmiş Binary Sayı : " + result);
}



// Bulunan Binary Sayının Tersi
function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }

    return reverseBinary;
}