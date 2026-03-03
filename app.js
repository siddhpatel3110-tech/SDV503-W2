console.log('Hello world')
var name = "Alice"; // Function, hoisted - avoid in modern JS
let age = 25;       
const PI = 3.14159; // Blocke-scoped, cannot be reassigned

let score = 0;      
score = 10;         // OK - reassignment allowed for let

const MAX = 100;
//MAX = 200;       // TypeError: Assignment to constant variable 
let homeAddress = "69 Washbourn";
let userage = 20;
console.log(homeAddress)

const msg = "Hello, Javascript1";

msg.length
msg.toUpperCase()
msg.toLowerCase()
msg.includes("Java")
msg.startsWith("He")
msg.indexOf("Java")
msg.slice(7, 17)
msg.replace("Hello, Hi")
msg.split(", ")
" hi ".trim()