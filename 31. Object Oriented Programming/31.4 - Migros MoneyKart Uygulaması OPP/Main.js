let mesaj =
    `
Migros'a Hoş Geldiniz!
MoneyKartınız Var mı?
1- Evet
2- Hayır
`;
const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 300
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 350
    },
    {
        urunIsmı: "Domates",
        fiyat: 30
    },
    {
        urunIsmi: "Marul",
        fiyat: 8
    } //Toplam 703
]

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc){
    //MoneyKartı Vardır
    let isim = prompt("Adınızı Giriniz: ");
    let soyisim = prompt("Soyadınızı Giriniz: ");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar = musteri.hesapla();

    alert(
        `
        Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
        `);

} else {
    //MoneyKartı Yoktur
    const musteri =new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`)

}
