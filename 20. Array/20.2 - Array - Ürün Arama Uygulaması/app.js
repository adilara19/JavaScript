// HEPSİBURADA-TRENDYOL GİBİ WEBSİTELERİNE BENZER ÜRÜN ARAMA UYGULAMASI


let product1 = {
    name: "Apple MacBook Air M2",
    category: "technology",
    color: "grey",
    price: 33.499
}
let product2 = {
    name: "HP Victus Gaming Laptop",
    category: "technology",
    color: "black",
    price: 18.399
}
let product3 = {
    name: "Lenovo V156 G2 Intel Core i5",
    category: "technology",
    color: "dark grey",
    price: 15.385
}
let product4 = {
    name: "Monster Tulpar T7",
    category: "technology",
    color: "dark black",
    price: 38.599
}
let product5 = {
    name: "Dell Gaming G5 Intel Core i7",
    category: "technology",
    color: "dark blue",
    price: 34.689
}
let product6 = {
    name: "Apple MacBook Air M1",
    category: "technology",
    color: "grey",
    price: 30.499
}
let product7 = {
    name: "MSI KATANA Intel Core i7",
    category: "technology",
    color: "grey",
    price: 54.700
}
let product8 = {
    name: "HP Pro Tower Intel Core i5",
    category: "technology",
    color: "grey",
    price: 31.399
}
let product9 = {
    name: "Acer Nitro 5 Intel Core i5",
    category: "technology",
    color: "grey",
    price: 15.999
}
let product10 = {
    name: "MSI GF63 Thin Intel Core 17",
    category: "technology",
    color: "grey",
    price: 24.599
}
let product11 = {
    name: "Monster Abra A5 Intel Core i7",
    category: "technology",
    color: "grey",
    price: 26.299
}
let product12 = {
    name: "Acer Aspire 3 Intel Core i5",
    category: "technology",
    color: "grey",
    price: 12.799
}


let products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12];
let filteredProducts = [];
let customerSearchedProduct = prompt("Lütfen Aradığınız Ürünün İsmini Giriniz: ");


getFilteredProducts(products);
writeFilteredProducts(filteredProducts);

function getFilteredProducts(products) {
    products.forEach(function (product) {
        if (product.name.toUpperCase().includes(customerSearchedProduct.toUpperCase(), 0)) {
            filteredProducts.push(product);
        }
    })
};

function writeFilteredProducts(products) {
    products.forEach(function (product) {
        console.log("---------------------------------------------------------------------");
        console.log("|" + product.name + " | " + product.category + " | " + product.color + " | " + product.price);
        console.log("---------------------------------------------------------------------");
    })
}

