//? ASYNC AWAIT

/*

async: // Bir function async keywordü ile olarak işaretlenirse bunun döndüğü tip artık promise olur.

*/

// async function hello(){   
//     return "Hello World";
// }
// console.log(hello());

//* Async Await Kullanmadan Yazılırsa
document.querySelector("#button").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post)=> {
        console.log(post)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json())
        .then((comments) => console.log(comments))
    })
})

//* Async Await ile Yazılırsa
document.querySelector("#button").addEventListener("click",async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")) .json()

    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments)
})