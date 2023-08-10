// DATE 

let date = new Date();
console.log(date);

//! Get Methods
console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getMonth()+1);

console.log(date.getDay());

console.log(date.getHours());

console.log(date.getMilliseconds());

console.log(date.getMinutes());

console.log(date.getTimezoneOffset());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toLocaleString());


//! Set Methods
console.log(date);
date.setDate(30);
console.log(date);