// [Solution 1] Inches to Meters
function metersToInches(meters) {
let inches = 0;
inches = meters * 39.3701
    return inches;
}
console.log(metersToInches(0))    // output: 0
console.log(metersToInches(1))    // output: 39.3701
console.log(metersToInches(1.5))  // output: 59.05515
console.log(metersToInches(15.6)) // output: 614.17356

// [Solution 2] Loop n Times
function loopThrough(arg){
const msg = "Hello World";
let result = "";
while (arg > 0) {
    result += msg + (arg > 1 ? ", " : "");
    arg--;
}
return result;
} 
console.log(loopThrough(0))    // output: ""
console.log(loopThrough(1))    // output: "Hello World"
console.log(loopThrough(3))    // output: "Hello World, Hello World, Hello World"

// [Solution 3] Even or Odd
function evenOrOdd(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrOdd(1))   // output: Odd
console.log(evenOrOdd(2))   // output: Even
console.log(loopThrough(3)) // output: Odd

// [Solution 4] Working with Objects
let person = {
    name: "",
    age: 1,
    describe: function() {
        return `${this.name}, ${this.age} years old.`;
    }
};
console.log(person2.describe());

// [Solution 5] Math.random
function overOrUnder() {
const randomNum = Math.random() * 2;
console.log(randomNum);
    if(randomNum > 1.5){
        console.log("Over 1.5");
    } else {
        console.log("Under 1.5");
    }
}
overOrUnder(); 

// [Solution 6] Splice Method
function spliceArr(arr1, arr2) {
let i = 0;
while(i < arr1.length && i < arr2.length) {
    if (arr1[i] === arr2[i]) {
        i++;
    } else {
        arr1.splice(i, 1);
    }
}
for (let x = i; x < arr2.length; x++) {
    arr1.splice(i, 0, arr2[x]);
    i++
}
    return arr1;
}
console.log(spliceArr([2, 3, 4, 5], [2, 4, 5])); // output: [2, 4, 5]

// [Solution 7] While Loops
function whileLoopMultiply() {
let ans = 5;
    while(ans <= 50) {
        console.log(ans);
        ans += 5;
    }
}

// [Solution 8] String Manipulation
function toTitleCase(str) {
    let result = str[0].toUpperCase();  
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += ' ' + str[i];  
        } else {
            result += str[i];  
        }
    }
    return result;
}
console.log(toTitleCase("myName"));     // output: "My Name"
console.log(toTitleCase("helloWorld")); // output: "Hello World"
console.log(toTitleCase("countToTen")); // output: "Count To Ten"
