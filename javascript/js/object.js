// Object in javascript

//Read Properties:
var user = {
    name: "Dishant Sawant",
    age: 16
}
console.log(user) //{name: 'Dishant Sawant', age: 16}

// update properties:
user.name = "Ketan Sawant";
user.age = 36
console.log(user) //{name: 'Ketan Sawant', age: 36}

// Add properties:
user["like this video"] = true
console.log(user) //{name: 'Ketan Sawant', age: 36, like this video: true}

// Read above Properties 
console.log(user["like this video"]) //true

// Delete above properties 
delete user["like this video"];
console.log(user) //{name: 'Ketan Sawant', age: 36} 

//para function
const paraFun = (function (a) {
    delete a
    return a
})(10);
console.log(paraFun) //output is 10

//Dynamicly add props
const properties = "firstName"
const name = "Dishant Sawant"
const user2 = {}
user2[properties] = name;
console.log(user2) //{firstName: 'Dishant Sawant'}

// for loop
const user3 = {
    name: "Dishant Sawant",
    mName: "Ketan Sawant",
    age: 16,
    place: "Vadodara"
}

// print key only
for (key in user3) {
    console.log(key)
}

// print key velu 
for (key in user3) {
    console.log(user3[key])
}

// What is output:
const numbers = {
    a: "one",
    b: "two",
    a: "three",
}
console.log(numbers.a) // three

// Create a function multiplybyTwo(obj) that multipies 
// all numetic properties value of nums by 2
//====================================================

let numbers02 ={
    a: 100,
    b: 200,
    title: "I am dishant"
}

multiplybyTwo(numbers02);

function multiplybyTwo(obj){
    for( key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2;
        }
    }
}

console.log(numbers02);

// what's the Output of the following code?
//=========================================

const a = {};
const b = {key: "b"}
const c = {key: "c"}

a[b] = 123; //[object Object]: 123
a[c] = 456; //[object Object]: 456

console.log(a[b]); //456

// what's JSON.stringgify and JSON.parse?
//=======================================

// JSON.stringgify use to convert JSON obj to string obj
let jsonSting = JSON.stringify(user3);
console.log(jsonSting);

//Store in local storege 
localStorage.setItem("userData", jsonSting);

// JSON.parse use to convert JSON string obj to JSON obj
console.log(JSON.parse(jsonSting));

//Delete Local storege
localStorage.removeItem("userData")

// JSON.stringgify use to convert JSON obj to selected props string obj
console.log(JSON.stringify(user3,["age","place"])); //{"age":16,"place":"Vadodara"}

//spread operator in javascript
//=============================

//What is the Output
console.log([..."ketan sawant"]) //['k', 'e', 't', 'a', 'n', ' ', 's', 'a', 'w', 'a', 'n', 't']

const userFinal = {name: "Dinesh Sawant", age: 47, ...user3}
console.log(userFinal); //{name: 'Dishant Sawant', age: 16, mName: 'Ketan Sawant', place: 'Vadodara'}


//What is the Output
//==================

const shape = {
    radius: 10,
    diameter(){
        return this.radius*2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //NaN because in arrow function this refe.for window object

//Destructuring Object
//====================

let user4 = {
    paraName: "Ketan",
    lastName: "Sawant",
    age: 35,
    son: {
        chiildName: "Dishant",
        age: 16
    }
}

//const{paraName} = user4;
//console.log(paraName);

//const paraName = "Megha";
//const{paraName: motherName} = user4;
//console.log(paraName);

const{son:{chiildName}} = user4;
console.log(chiildName);

//** Rest parameter must be last in a parameter list
//==================================================

function getItems(fruitList, favoriteFruit, ...args){
    return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"));

// object referancing 
//==================================================

let e = {name: "Dishant"}
let d;

d = e;
e.name = "ketan";
console.log(d.name); // ketan because we praviding referance not the complite obj


// IMP below both obje has diffrence memery place so it give false 
console.log({e:1} == {e:1}); //false
console.log({e:1} === {e:1}); //false

let person = {fName:"Ketul", age: 30}
const members = [person]
person = null;

console.log(members) //{fName:"Ketul", age: 30} we store into members array and than we give null value 

const value = {number: 10};

const multiply = (x = {... value}) =>{
    console.log((x.number *= 2));
}

multiply(); //20 x.number = 10 x 2 = 20
multiply(); //20 x.number = 10 x 2 = 20
multiply(value); //20 x.number = 10 x 2 = 20 update number props from 10 to 20
multiply(value); //40 x.number = 20 x 2 = 40

// IMP
//==================================================

function changeAgeRef(person){

    person.age = 25;
    person = {
        name: "Dishant",
        age: 16,
    };
    return person
}

const person2 = {
    name: "Ketan",
    age: 40,
};

console.log(person2); //{name: 'Ketan', age: 40}

const person3 = changeAgeRef(person2);

console.log(person2); //{name: 'Ketan', age: 25}
console.log(person3); //{name: 'Dishant', age: 16}

//How to deep copy and clone an object?

let user5 = {
    name: "Ketan Sawant",
    age: 35
};

// there is three way to do this
//------------------------------ 
//const cloneObj = Object.assign({}, user5);
//const cloneObj = JSON.parse(JSON.stringify(user5));
const cloneObj = {...user5}
cloneObj.name = "Dishant"

console.log(user5, cloneObj);
