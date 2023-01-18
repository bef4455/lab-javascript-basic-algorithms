// Iteration 1: Names and Input
let hacker1 = "leo";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "leo";
console.log(`the navigatore's name is ${hacker2}`);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
    
}
else if (hacker2.length > hacker1.length) {
    console.log(`Ìt seems that the navigator has the longesy name, it has ${hacker2.length}`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length}`);

}

// Iteration 3: Loops

let newHacker = "";
for (let i = 0; i < hacker1.length; i++) {


    newHacker = (newHacker + hacker1[i] + " ").toUpperCase();
}

console.log(newHacker);

let newHacker2 = "";
for (let i = hacker2.length -1;i >= 0; i--) {
newHacker2 = (newHacker2 + hacker2[i]);
}
console.log(newHacker2);




let shortestNameChar = "";
let shortestName = "";

if (hacker1.length >= hacker2.length) {
    shortestNameChar=hacker2.length;
}else {
    shortestNameChar=hacker1.length;
} 

if (hacker1 === hacker2){
        console.log("What ?! You both have the same name?");
} else {

for (let i = 0; i < shortestNameChar; i++) {

    if (hacker1[i].toUpperCase() < hacker2[i].toUpperCase()) {
        console.log("The driver's name goes first.");
        break;
    } else if (hacker1[i].toUpperCase() > hacker2[i].toUpperCase()) {
        console.log("Yo, the navigator goes first definetely.");
        break; 
    } else if (i === shortestNameChar-1) {
console.log(hacker1.length === shortestName ? "The driver's name goes first.":"Yo, the navigator goes first definetely.")
        
    }
}
}



