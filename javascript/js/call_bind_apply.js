
// what is call?
//==============
var obj = {name: "Ketan"};

function sayHello(age, profession){
    return "Hello "+this.name+" Age: "+age+" working as a "+profession ;
}

//console.log(sayHello.call(obj)) //the object used as the current object
//console.log(sayHello.call(obj, 35, "UI Developer")) //a list of arguments to be passed to the methord.

// what is Apply?
//===============
//console.log(sayHello.apply(obj, [35, "UI Developer"])) //Error: to fixed use Array CreateListFromArrayLike called on non-object

// what is bind?
//===============
// bind return function which we can use multipla time

const bindfunc = sayHello.bind(obj);

// console.log(bindfunc(35, "UI Developer"))
// console.log(bindfunc(55, "UI Designer"))

// call with function inside object
//=================================

const age=10;

var person = {
    name: "Ketan",
    age: 25,
    getAge: function(){
        return this.age
    }
};

var person2 = {age: 16};

//console.log(person.getAge.call(person2)) // 16
//console.log(person.getAge.bind(person2)()) // 16

// Explicit Binding with arrow function
//=====================================
//console.log("Arrow Function");
const age2=10;

var person3 = {
    name: "Ketan",
    age2: 25,
    getAgeArrow: () => console.log(this.age2),
    getAge: function(){
        return this.age2
    }
};

var person4 = {age2: 16};
//console.log(person.getAge.call(person4)) // 16
//console.log(person.getAge.bind(person4)()) // 16

//What is the output?
//===================

var status ="😎"

setTimeout(() =>{
    const status = "😍"
    const date = {
        status: "🥑",
        getStatus(){
            return this.status
        }
    };

    //console.log(date.getStatus()); // "🥑"
    //console.log(date.getStatus.call(this)); // "😎"

}, 0);

// Call printAnimals such that it prints all animals in object
//============================================================

const animals = [
    { species: "Lion", name: "King"},
    { species: "whale", name: "queen"}
]

function printAnimals(i){
    this.print = function(){
        //console.log("#"+i+" "+this.species+": "+this.name);
    };
    this.print();
}

for(let i = 0; i<animals.length; i++){
    printAnimals.call(animals[i], i);
}

// Append an Array to another array
//=================================

const a = ["Ketan", "Dishant", "Megha"];
const b = ["Bhumi", "Tushal", "Deepak", "Mona"]

a.push.apply(a, b);

// console.log(a);
// console.log(a.sort()); //.reverse() and .sort() can use

// Find Min and Max number in an array by using Apply
//===================================================

const number = [5, 7, 95, 2, 87]

//console.log(Math.max.apply(null, number)); // 95
//console.log(Math.min.apply(null, number)); // 2

// Bound function
//================

function f(){
    //console.log(this) //this refering to window object
}

let user = {
    g: f.bind(null)
}

user.g(); // function f() is window object it will print

// Bind Chaining 
//==============

function e(){
    //console.log(this.name) //this refering to window object
}

e = e.bind({name:'Ketan'}).bind({name:'Dishant'}); //Bind Chaining it will print only "Ketan"
e();

//Fix the line  to make code work properly
//========================================

// function checkPassWord(success, faild){
//     let password = prompt("Password?", "");
//     if(password == "123"){ success()}else{faild();};
// }

// let user2 = {
//     name: 'Ketan Sawant',
//     loginSuccessful(){
//         console.log(`${this.name} Logged in`);
//     },
//     loginFaild(){
//         console.log(`${this.name} Faild to logged in`);
//     }
// }

// checkPassWord(user2.loginSuccessful.bind(user2), user2.loginFaild.bind(user2))

//Partial Application for Login function 
//======================================

// let user3 = {
//     name: 'Ketan Sawant',

//     login(result){
//         console.log(this.name+(result? " login successful" : "login faild"));
//     }
// }
// checkPassWord(user3.login.bind(user, true), user3.login.bind(user3, false));

// Polyfill
//=========
let car1 = {
    color: "Red",
    company: "frrari",
}

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

purchaseCar.call(car1,'$', 2000);// I have purchased Red Frrari car for $2000;

// Polyfill for Call Method 
//=========================

Function.prototype.myCall = function (context ={}, ...args){
    if(typeof this != "function"){
        throw new Error(this +'it is not a callable');
    }
    context.fnc = this;
    context.fnc( ...args);
}

//purchaseCar.myCall(car1,'$', 2000);

// Polyfill for Apply Method 
//=========================

Function.prototype.myApply = function (context ={}, arg = []){
    if(typeof this != "function"){
        throw new Error(this +'it is not a callable');
    }

    if(!Array.isArray(arg)){
        throw new Error(this +'it is not a Array');
    }
    context.fnc = this;
    context.fnc( ...arg);
}

//purchaseCar.myApply(car1,['$', 2000]);

// Polyfill for bind Method 
//=========================

Function.prototype.myBind = function (context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this +"cannot be bound as it's not callable");
    }

    context.fn = this;
    return function(...newArgs){
        return context.fn(...args, ...newArgs);
    };
}

// const newfunc =  purchaseCar.bind(car1);
// //console.log(newfunc());

const newfunc =  purchaseCar.myBind(car1, "$", 2000);
newfunc("$", 2000);

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
Examples: Inputs: "abc", "bc" Output: true Inputs: "abc", "d" Output: false
*/
//=========================

function solution(str, ending){
    return str.endsWith(ending);
}
/*
Outputs: 
solution("abc", "bc"); // true
solution("abc", "d");  // false
solution("abc", "");   // true
solution("", "a");     // false
solution("", "");      // true
*/

//=========================
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. 
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). 
If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers. 
Examples 
"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est" 
"4of Fo1r pe6ople g3ood th5e the2" --> "Fo1r the2 g3ood 4of th5e pe6ople" 
"" --> ""
 */

//=========================
function order(words){
    return words.split(' ').sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

/*
Outputs: 
order("is2 Thi1s T4est 3a"); // "Thi1s is2 3a T4est"
order("4of Fo1r pe6ople g3ood th5e the2"); // "Fo1r the2 g3ood 4of th5e pe6ople"
order(""); // ""
*/

//=========================
//=========================
/*
Background Oh no, there were some problems with your computer and now you cannot convert any data type to strings! 
Task 
The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types. 
I. Booleans 
For booleans: 
true should be converted to "true" 
false should be converted to "false" 

II. Numbers 
For numbers, conversion should be as follows: 
// e.g. 
// (3).toString() === "3" 
// (3.14).toString() === "3.14" 
// (-78).toString() === "-78" 
// Math.PI.toString() === "3.141592653589793" 

III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. 
However, on top of fixing it, we would also like to improve it as well. 
We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. 

For example: 
// e.g. [].toString() === "[]" 
// [1].toString() === "[1]" 
// [2,4,8,17].toString() === "[2, 4, 8, 17]" 
// [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]" 

As you may have noticed in the examples above, when the array has more than one element, 
some of the strings have spaces as well as commas separating each item but some strings do not. 
For the purposes of this Kata whether there are whitespaces or not does not matter 
for stringified arrays - before conducting the tests your input is stripped of all whitespace. 

Final Note - IMPORTANT Your recovered toString() methods should only return the stringified version of the 
input - it should NOT alter the original value. Test cases have been created to confirm this. Kata in this Series Strings, 
strings, strings (Easy) - this Kata Strings, strings, strings (Hard)

*/

// Boolean
Boolean.prototype.toString = function () {
  return this.valueOf() ? "true" : "false";
};

// Number
Number.prototype.toString = function () {
  return "" + this.valueOf(); // implicit conversion
};

// Array (numbers only)
Array.prototype.toString = function () {
  if (this.length === 0) return "[]";

  let result = "[";

  for (let i = 0; i < this.length; i++) {
    result += "" + this[i]; // convert each number

    if (i !== this.length - 1) {
      result += ", "; // spacing optional (allowed)
    }
  }

  result += "]";
  return result;
};

/*
Outputs: 
true.toString()            // "true"
false.toString()           // "false"

(3).toString()             // "3"
(3.14).toString()          // "3.14"

[].toString()              // "[]"
[1].toString()             // "[1]"
[2,4,8].toString()         // "[2, 4, 8]"
[Math.PI].toString()       // "[3.141592653589793]" */

//=========================