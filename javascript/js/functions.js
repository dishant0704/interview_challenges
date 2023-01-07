//Function in javascript

//Q1. what is function declarations?
//----------------------------------
//Ans: function declarations Or function definations Or function statement 

function square(num){
 return num*num;
}

//Q2. what is function Expression?
//----------------------------------
//Ans: when we strore function into variable it call function expression.

//const square = function(num){return num*num;};

//Q3. what is anonymous function?
//----------------------------------
//Ans: An anonymous function is a function without a function name
//function (num){return num*num;};

//Q4. what is first class Funtions?
//----------------------------------
//Ans: wher function tritted as a veryable it's call first class funtion 
//  function displaySquare(fun){
//     console.log("First Class fun: "+fun(5));
//  }

//  displaySquare(square)

//Q5. what is IIFE?
//----------------------------------
//Ans: IIFE (immediately invoked function expression)As below
// (function square(num){
//     console.log(num*num);
//    })(2);

//    (function(x){
//        return(( function(y){
//         console.log(x)
//        }
//        )(3)) 
//    })(5)

//Q6. Function scope
//----------------------------------
//Ans: Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.
//In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = 'Chamakh';

// This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

//console.log(multiply()); // Returns 60

// A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

//console.log(getScore()); // Returns "Chamakh scored 5"

//Q7. Function Hoisting
//----------------------------------
//Ans: Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.

//Features of Hoisting:

// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code. 

//JavaScript allocates memory for all variables and functions defined in the program before execution.

//function hoisted complitly so you can use before it declarations

//HelloWorld();

// function HelloWorld(){
//     console.log("Hello World")
// }

//Note: JavaScript only hoists declarations, not initializations.
// how interpreter sees the above code
// var name;
// console.log(name); // undefined
// name = 'Mukul Latiyan'; 

//Q8. Function Hoisting -- what is output 
//---------------------------------------
//Ans: 

// var x=21;

// var fun = function() {
//     console.log(x) // 21
//     var x = 20;
// }

//fun() // it will print undefined because it has block scope and assigenvalue after print

//Q9. what is params and arguments 
//---------------------------------------
//Ans: 

function square(num){ // received value is know as params
    return num*num;
   }

   square(5); // passed value is called Arguments

//Q10. what is spread and rest operator
//---------------------------------------
//Ans: 

function employee(...data){ // received value is know as rest
    console.log(data);
   }
 let employeeData = [
    {name: "Ketan Sawant", designation:"Team Lead"},
    {name: "Rakesh Nagar", designation:"Sr. UI Developer"},
    {name: "Manish Patel", designation:"Sr. QA"},
 ]
 //employee(...employeeData); // passed value is called spread

 //Q10. what is spread and rest operator -- What is output on this
//----------------------------------------------------------------
//Ans: 

// const fun = function(a, ...number, x, y){ //Error: Rest parameter must be last formal parameter
//     console.log(x, y)
// }

//fun(5, 6, 3, 7) //Error: spread parameter must be last formal Arguments

 //Q11. what is Callback Function
//-------------------------------
//Ans: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
//Here is a quick example:

function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  //processUserInput(greeting);

  //document.addEventListener("click", function(){});

//Q12. what is Arrow function and normal function
//-----------------------------------------------
//Ans:

//:: 01::
function normalSquare(num){
    return num*num;
   }
//------|| Arrow function ||-------
const ArrowSquare_a = (num) => {
    return num*num;
   }
//------|| Or ||-------
const ArrowSquare_b = (num) => num*num;

//:: 02 Arguments::
function arguTest(){
    console.log(arguments);
   }
//------|| Arrow function ||-------
const arrowArguTest = () => {
    console.log(arguments);
   }
   //arguTest(...employeeData) // give Arguments object
   //arrowArguTest(...employeeData) // Error arguments is not defined at arrowArguTest

//:: 03 this keyword::
//username = "Dishant Sawant"
let user = {
    username: "Ketan Sawant",
    func1: () =>{
        console.log("Hi "+ this.username);
    },
    func2() {
        console.log("Hi "+ this.username);
    }
};

user.func1() //Hi undefined because it is reffre to globale object out side block uncommented line number 195 and than run
user.func2() //Hi Ketan Sawant