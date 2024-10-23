// "myGreeting" and greeting
let myGreeting = "Hello, welcome to Nothing!";
// Output 
console.log(myGreeting);

// Variable "pi" with the value of Pi
const pi = 3.14159;
// Attempt to re-assign pi this error will be caught and logged by using try-catch block.
try {
    pi = 3.14;
} catch (error) {
    console.log("Error when reassigning pi: " + error.message);
}


// "myNumber" and assign a number
let myNumber = 21;
let result = Math.min(myNumber, pi);
console.log("The minimum value between myNumber and pi is: " + result);
