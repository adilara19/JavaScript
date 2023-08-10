const formwrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");



runEventListener();

function runEventListener() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}

function clear() {
    searchInput.value = "";
    imageListWrapper.innerHTML = "";
}


function search(e) {

    const value = searchInput.value.trim();

    //Unsplash'tan fotoğrafları alabilmek için kullandığımız fetch api
    fetch(`https://api.unsplash.com/search/photos?query=${value}&page=1&per_page=10`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID FH4yZQShXR5Q0nOzP44VWekfxJMo7dPJsZa2ASxoY3Y"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            imageListWrapper.innerHTML =""; // Önceki arama sonuçlarını temizler
            Array.from(data.results).forEach((image) => {
                addImagetoUI(image.urls.small)
            })
        })
        .catch((error) => console.log(error));

    e.preventDefault();
}

function addImagetoUI(url) {


    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "400";

    div.append(img);
    imageListWrapper.append(div);
}
