//? FETCH API 

/*

Fetch API, server'a istek atmak yani bir hhtp isteğinde bulunmak için kullandığımız bir method

nasıl ki callback yerine promise kullandıysak
ajax(xmlhttprequest) yerine de fetch api kullanıyoruz.

*/

// function getStudents(url){
//     fetch(url)  //Promise döndü ama response tipinde promise döndü
//     // console.log(promise.json());
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// getStudents("students.json");


function getData(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users")