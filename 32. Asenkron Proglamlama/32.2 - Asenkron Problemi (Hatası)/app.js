// Asenkron Problemi

// Http istekleri

const users = [
    {
        userId : 5,
        post : "Dilara post #1"
    },
    {
        userId : 5,
        post : "Dilara post #2"
    },
    {
        userId : 5,
        post : "Dilara post #3"
    },
    {
        userId : 6,
        post : "Melisa post #1"
    },
    {
        userId : 7,
        post : "Burcu #1"
    }
]

// user id
// post by user id

function getUserId(){
    setTimeout(()=>{
        //Servise gitti, cevabı aldı
        return 5;
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId);
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
            }

        })
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId);

/*
Gerçek hayatta karşılaşabileceğimiz bir asenkron problemi örenği.
Bu durumdan kurtulabilmek için asenkronu seknrona çevirmemiz gerekiyor
*/