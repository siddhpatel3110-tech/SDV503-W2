console.log('Hello world')
var name = "Alice"; // Function, hoisted - avoid in modern JS
let age = 25;       // Block-scoped, can be reassgined
const PI = 3.14159; // Blocke-scoped, cannot be reassigned

let score = 0;      
score = 10;         // OK - reassignment allowed for let

const MAX = 100;
//MAX = 200;       // TypeError: Assignment to constant variable 