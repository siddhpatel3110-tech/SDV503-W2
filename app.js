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

const msg = "Hello, Javascript!";

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

console.log(msg.length)
console.log("the length of the mesg is =" + msg.length)
console.log(`The length of message is = ${msg.length}`)
console.log(msg.toUpperCase())

const name2 = "Siddh";
const age2 = "19";

const msg1 = "Hello, " + name2 + "! you are " + age2 + " years old. ";
 
const msg2 = `Hello, ${name2}! you are ${age2} years old.`          ;


const total = `Price: $${(12.99 * 2).toFixed(2)}`;
