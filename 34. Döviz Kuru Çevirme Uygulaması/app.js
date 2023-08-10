// Elementleri Seçelim

const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultOutput = document.querySelector("#result");
const clearButton = document.querySelector("#clearButton");
const saveButton = document.querySelector("#saveButton");
const calculationHistory = [];

const currency = new Currency();

runEventListeners();
function runEventListeners(){
    amountInput.addEventListener("input", delayedExchange);
    firstOption.addEventListener("change", exchange);  // İlk döviz seçimi değiştiğinde hesaplar
    secondOption.addEventListener("change", exchange); // İkinci döviz seçimi değiştiğinde hesaplar
    clearButton.addEventListener("click", clearFields);
}

// function saveToLocalStorage() {
//     localStorage.setItem("amountInput", amountInput.value);
//     localStorage.setItem("firstOption", firstOption.selectedIndex);
//     localStorage.setItem("secondOption", secondOption.selectedIndex);
//     localStorage.setItem("calculationHistory", JSON.stringify(calculationHistory));
// }

// // Sayfa yüklendiğinde local storage'dan değerleri geri almak için
// function loadFromLocalStorage() {
//     const savedAmount = localStorage.getItem("amountInput");
//     const savedFirstOption = localStorage.getItem("firstOption");
//     const savedSecondOption = localStorage.getItem("secondOption");
//     const savedHistory = JSON.parse(localStorage.getItem("calculationHistory"));

//     if (savedAmount) {
//         amountInput.value = savedAmount;
//     }
//     if (savedFirstOption) {
//         firstOption.selectedIndex = savedFirstOption;
//     }
//     if (savedSecondOption) {
//         secondOption.selectedIndex = savedSecondOption;
//     }
//     if (savedHistory) {
//         calculationHistory.push(...savedHistory);
//         updateHistory();
//     }
// }

// // Sayfa yüklendiğinde local storage'dan değerleri al
// loadFromLocalStorage();

let delayTimer;

function delayedExchange(){
    clearTimeout(delayTimer);
    delayTimer = setTimeout(exchange, 500); 
}

function clearFields(){
    amountInput.value = "";
    firstOption.selectedIndex = 0; // İlk seçeneği şeçili hale getirir
    secondOption.selectedIndex = 0; // İlk seçeneği seçili hale getirir
    resultOutput.value = "";

    //*Bu kodlarda yaptığımız değişiklikler, firstOption ve secondOption seçeneklerinin "change" olayını dinleyerek herhangi biri değiştiğinde (exchange işlevini çağırmak), otomatik olarak hesaplamanın güncellenmesini sağlar.
}

function exchange(){
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    if (amount === 0){
        resultOutput.value = "";
        return;
    }

   currency.exchange(amount, firstOptionValue, secondOptionValue)
   .then((result) => {
    resultOutput.value = result.toFixed(3) 

    addToHistory(amount, firstOptionValue, secondOptionValue, result);
   });
}


// Hesaplama Geçmişi Eklemek İçin
function addToHistory(amount, fromCurrency, toCurrency, result){
    const historyItem = `${amount} ${fromCurrency} = ${result.toFixed(3)} ${toCurrency}`;
    calculationHistory.unshift(historyItem);

    if (calculationHistory.length > 10){
        calculationHistory.pop();
    }
    // calculationHistory.push(historyItem);

    updateHistory();
}

function updateHistory(){
    const historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";

    calculationHistory.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    })
}