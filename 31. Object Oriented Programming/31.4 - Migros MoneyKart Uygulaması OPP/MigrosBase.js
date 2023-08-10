class MigrosBase {
    indirimOranı = 20;
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {

        let odenecekTutar = 0;

        if (this.urunleriKontrolEt(this.urunler)){
            //Sepet Dolu
            if (this.kartVarmi){
                //MoneyKartı Varsa
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOranı) / 100);
                })
            } else{
                //MoneyKartı Yoksa
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                })
            }

        } else {
            alert("En az bir tane ürün almalısınız.");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        return false;
    }
}