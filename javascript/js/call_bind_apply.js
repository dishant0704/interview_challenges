
// what is call?
//==============
var obj = {name: "Ketan"};

function sayHello(age, profession){
    return "Hello "+this.name+" Age: "+age+" working as a "+profession ;
}

//console.log(sayHello.call(obj)) //the object used as the current object
console.log(sayHello.call(obj, 35, "UI Developer")) //a list of arguments to be passed to the methord.

// what is Apply?
//===============
console.log(sayHello.apply(obj, [35, "UI Developer"])) //Error: to fixed use Array CreateListFromArrayLike called on non-object

// what is bind?
//===============
// bind return function which we can use multipla time

const bindfunc = sayHello.bind(obj);

console.log(bindfunc(35, "UI Developer"))
console.log(bindfunc(55, "UI Designer"))

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
console.log(person.getAge.call(person2)) // 16
console.log(person.getAge.bind(person2)()) // 16

// Explicit Binding with arrow function
//=====================================
console.log("Arrow Function");
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
console.log(person.getAge.call(person4)) // 16
console.log(person.getAge.bind(person4)()) // 16

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

    console.log(date.getStatus()); // "🥑"
    console.log(date.getStatus.call(this)); // "😎"

}, 0);

// Call printAnimals such that it prints all animals in object
//============================================================

const animals = [
    { species: "Lion", name: "King"},
    { species: "whale", name: "queen"}
]

function printAnimals(i){
    this.print = function(){
        console.log("#"+i+" "+this.species+": "+this.name);
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

console.log(a);
console.log(a.sort()); //.reverse() and .sort() can use

// Find Min and Max number in an array by using Apply
//===================================================

const number = [5, 7, 95, 2, 87]

console.log(Math.max.apply(null, number)); // 95
console.log(Math.min.apply(null, number)); // 2

// Bound function
//================

function f(){
    console.log(this) //this refering to window object
}

let user = {
    g: f.bind(null)
}

user.g(); // function f() is window object it will print

// Bind Chaining 
//==============

function e(){
    console.log(this.name) //this refering to window object
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

//checkPassWord(user2.loginSuccessful.bind(user2), user2.loginFaild.bind(user2))

//Partial Application for Login function 
//======================================

let user3 = {
    name: 'Ketan Sawant',

    login(result){
        console.log(this.name+(result? " login successful" : "login faild"));
    }
}
//checkPassWord(user3.login.bind(user, true), user3.login.bind(user3, false));

// Polyfill
//=========
let car1 = {
    color: "Red",
    company: "frrari",
}

function purchaseCar(currency, price) {
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );
}

//purchaseCar.call(car1,'$', 2000);

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
// console.log(newfunc());

const newfunc =  purchaseCar.myBind(car1, "$", 2000);
newfunc("$", 2000);
