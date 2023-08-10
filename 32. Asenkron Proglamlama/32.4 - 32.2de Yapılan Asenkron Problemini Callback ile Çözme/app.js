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
        post : "Burcu Post #1"
    }
]

// user id
// post by user id

function getUserId(callback){
    setTimeout(()=>{
        //Servise gitti, cevabı aldı
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostByUserId);
// let userId = getUserId();
// getPostByUserId(userId);

/*
Gerçek hayatta karşılaşabileceğimiz bir asenkron problemi örenği.
Bu durumdan kurtulabilmek için asenkronu seknrona çevirmemiz gerekiyor
*/