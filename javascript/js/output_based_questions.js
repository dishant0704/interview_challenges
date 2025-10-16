//What is output of below code

console.log(7 > 5 > 4 ); //false

//============================================
// Interview - Ketan - L1 UI Reactjs - Hexaware Technologies
//============================================
var array = [1, 2, 3, 4,]
array.length = 0 // try this array.length = 3

console.log(array) //[]
console.log(array[0]) //undefined

//============================================
// Go Digit- UI Lead - Ketan Sawant - May 15 , 2024  2:00 PM India
// Wednesday, 15 May⋅14:00 – 14:30
//============================================
// #1.How to swap two numbers without using a temporary variable?
var x=10
var y=25

x = x+y //35
console.log(x)
y = x-y //(35 - 25 = 10)
console.log("y: ", y)
x = x-y //(35 - 10 = 25)
console.log("x: ",x)

// What's the Output?

// for(var i=0; i<3; i++){
//     setTimeout(() => {
//       console.log(i)  
//     }, 1000);
// }
// Output: 333

// fixed with let or closer
// for(var i=0; i<3; i++){
//     let a = i;
//     setTimeout(() => {
//       console.log(a) ; 
//     }, 1000);
// }
// Output: 012

//============================================
//The gate Way corp
//Wednesday, August 28⋅16:00 – 17:00
//hr@thegatewaycorp.com
//dimple.tiwari@thegatewaycorp.com or call me on +916359884716.
//========================================


// var a ="10"
// var b =10
// console.log(a==b) //true
// console.log(a===b) //false

// var a=10
// var b=a++ //11
// var c=++a //12
// console.log(a,b,c) //true 12, 10, 12 

// var y={}
// var x=y
// x.a = 10
// console.log(y) //{ a: 10 }

//==========================================
//Interview Scheduled with Hexaware Technologies
//Wednesday, 18 September⋅11:15 – 12:00
//==========================================
// let y = true + true // 1+1 = 2
// let x = y + false // 2+0 = 2
// console.log(x) //2

// let x = false
// let y = "0"
// let z = 0

// console.log(x==y) // false
// console.log(x==z) // true

// let x = "false"
// let y = !x
// console.log(y) // false

//=======================================
// Hexaware Technologies -- Technical round of Ketan Sawant
// HR: Amit Gupta [9315980576] (Hexaware Technologies), Pammal: viveks1@hexaware.com
// Friday, December 6⋅12:30 – 13:00
//=======================================
function foo(){
    let a=b=0
    a++
    return a
}
foo();
console.log(typeof a) //undefined
console.log(typeof b) //number

//=======================================
// Infosys Evaluation for Ketan Sawant (UI/UX + React: Exp - 13 Years)
// Thursday, 26 June⋅10:00 – 10:30
// HR: aishwarya.kujur@infosys.com, Pammal:sitara.m@infosys.com
//=======================================

var add = (a, b=90) => {
    console.log(a+" "+b)
}
add(100) // 100 90

var object = {
    name: "ketan",
    address: "Tarsali, Vadodara",
    cell: 9924297347
}
const{name, ...remaining} = object;
console.log(name) // ketan
console.log(remaining) //{ address: 'Tarsali, Vadodara', 'cell no.': 9924297347 }

//=======================================
// Technical Discussion - React-Dev Mgr- KetanSawant
// Monday, 6 October⋅16:00 – 17:00
//=======================================

// console.log(1+"2"+"2"); //122
// console.log(1+"2"*"2"); //5
// console.log("A"-"B"+"2"); //NAN2
// console.log("8"-"5"+"2"); // 32
// console.log(typeof null); // object
// console.log(typeof undefined); //undefined
// console.log(null === undefined); //false
// console.log(null == undefined); //true

// let string = "Ketan"
// if(true){
//     let string = "Dishant"
//     console.log(string)
// }
// console.log(string) // Dishant, // Ketan

// obj = {
//     a:"ketan_Object",
//     b:function(){
//         console.log(this.a)
//     }
// }

// const c = obj.b
// obj.b() //ketan_Object
// c() //undefined
// c.call(obj) //ketan_Object

//======================================
//Technical Interview - Ketan Sawant (React js)
//HR: Shraddha Soni, Pammal: ashish.vadhwa@netweb.biz
//Monday, 25 November⋅14:00 – 15:00
//======================================

setTimeout(function() {
    console.log('firsttimeout');
}, 0);
setImmediate(function() {
    console.log('Immediate Func');
}, 0);
setTimeout(function() {
    console.log('Timedout again');
}, 10);
Promise.resolve(1).then(function() {
    console.log('Promise');
});
process.nextTick(function() {
    console.log("processing next");
});
console.log("John");

//Output
// John
// processing next
// Promise
// firsttimeout
// Immediate Func
// Timedout again

