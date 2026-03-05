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


const total = `Price: $${(12.99 * 2).toFixed(2)}` ;

// if / else if / else
    const score2 = 75;
if (score2 >=90) {
    console.log("A");
} else if (score2 >=80) {
    console.log("B");
} else if (score2 >=70) {
    console.log("C");
} else {
    console.log("Below C");
}

// switch - great for exact matches
const day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;    
    default:
        console.log("Midweek");
}

//arthmetic 5+3//8
//10-4//6
//5*3//15 10/2///5 10%3//1
//2**3//8

//comparison - always prefer ===over ==
5===5//true 5 !== 3//true (strict: checks value and type)
5==5//true 5== '5'//false (loose vs strict)
10>5//true 5>=5//true
//logical
true && true //true true && false //false true || true //true !false //true
//assigment
let x= 10; x+=5;//15 x-=2;//13 x *=2;//26

