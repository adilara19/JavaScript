//? PROMISE NEDİR?

/*

Promise, Asenkron yapıyı Seknrona çevirmek için kullanılır. Callback yerine alternatif olarak kullanılan bir yapıdır.

Pending: initial state, neither fulfilled nor rejected.
Fulfilled: meaning that the operation was completed successfully.-------> ".then(onFullfield)"
Rejected: meaning that the operation failed.----------------------------> ".catch(onError)"

*/


// let check = true;

// const promise1 = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise Başarılı"); //Başarılı
//     }else{
//         reject("Promise Başarısız."); //Başarısız
//     }
// })

// console.log(promise1);


let check = false;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promiste herhangi bir sıkıntı yok")
        } else {
            reject("Sıkıntı Büyük!")
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response) //True Dönerse Çalışır Çünkü Fullfilled
    })
    .catch((error) => {
        console.log(error)  //False Dönerse Çalışır Çünkü Reject
    })
    .finally(() => console.log("Her zaman çalışır"))  //Her zaman çalışır, fullfilled ya da reject olup olmamasına bakmaz.


//? Promise + XMLHTTPREQUEST

// function readStudents(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }

// readStudents("students.json")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

function getUsers(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState === 4 && xhr.status ===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    // console.log(response)
    response.forEach((user) => {
        console.log(user.name) // Sadece isimlerini alır
    });
    console.log("Daha sonra farklı asenkron kodlarını çalıştırabiliriz.")
})

.catch((eror) => console.log(eror))
.finally(()=>{console.log(".finally() her daim çalışmak için var")})