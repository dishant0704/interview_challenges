// closures
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

//what is lexical scopr
//======================
//ANS: a variabale defind out side the function defind in another function is call lexical scope

//global scope
function init() {
    // inner scope 01
    var name = 'Ketan Sawant'; // name is a local variable created by init
    function displayName() {
        // inner scope 02
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
//init();

function makeFunc() {
    const name = 'Ketan';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
//myFunc();

function makeFunc_2() {
    const name = 'Ketan';
    function displayName() {
        console.log(...arguments);
    }
    return displayName;
}

//makeFunc_2()(["Dishant"])

//what is Closure scope chain
//===========================
//ANS: Every closure has three scopes:
// #01: Local scope (Own scope)
// #02: Enclosing scope (can be block, function, or module scope)
// #03: Global scope
//A common mistake is not realizing that in the case where the outer function is itself a nested function, access to the outer function's scope includes the enclosing scope of the outer function—effectively creating a chain of function scopes. To demonstrate, consider the following example code.

// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

//console.log(sum(1)(2)(3)(4)); // 20

//01: what is out put
//===========================

// let count = 0;
// (function(){
//     if(count === 0){
//         let count = 1;
//         console.log(count) // 1
//     }
//     console.log(count);// 0
// })();

//02: write a function that would allow you to do this
//====================================================
// var addSix = createBase(6)
// console.log(addSix(10)); //return 16
// console.log(addSix(21)); //return 21

function createBase(num){
    return function(innerNum){
        return innerNum+num
    }
}

//03: Optimization
//================

function find(){
    let a = []
    for(let i = 0; i< 1000000; i++){
        a[i] = i*i
    }
    return function(index){
        console.log(a[index]);
    }
    
}

const closure_01 = find()

// console.time("6");
// closure_01(6)
// console.timeEnd("6")
// console.time("12");
// closure_01(12)
// console.timeEnd("12")

//04: How would you use a closure to create a private counter?
//============================================================

function counter(){
    var _counter = 0
    function add(increment){
        _counter += increment

    }
    function retrive(){
        return "Counter = "+_counter;
    }

    return{
        add,
        retrive
    };
}

const c = counter();
c.add(20)
c.add(30)

//console.log(c.retrive());

//05: What is Modulw Pattern?
//===========================
// it is help us to protect API code if it is in privateMethod

var Module = (function(){
    function privateMethod(){
        console.log("Private Method");
    }
    return{
        publicMethod: function(){
            console.log("Public Method");
           //can call privateMethod();
        }
    }
})();

//Module.publicMethod(); //Public Method
//Module.privateMethod(); //Module.privateMethod is not a functio

//05: Make this run only once
//===========================
//(05:A)
let view;
function likeTheVideo(){
    let flag = true;
    return function(){
         view = "Ketan Sawant";
        if(flag){            
            console.log("Welcome ", view)
            flag = false
        }else{             
            console.log("Hi", view)            
        }
    }
   
}
let testFunction = likeTheVideo()
// testFunction();
// testFunction();
// testFunction();

//(05:B)
function once(func, context) {
    let ran;
    return function () {
        if (func) {
            ran = func.apply(context || this, arguments);
            func = null;
            return ran;
        }
    }
}

const hello = once(()=> console.log("Ketan Sawant"));

// hello()
// hello()
// hello()

//06: Implement Caching/Memoize function
//======================================
function myMemoize(func, context){
    const res = {};
    return function(...args){
        var argsCashe = JSON.stringify(args)
        if(!res[argsCashe]){
            res[argsCashe] = func.call(context || this, ... args);
        }
            return res[argsCashe];
    };
};

const clumsysquare = (num1, num2) => {
    for (let i=1; i <= 1000000; i++){}
    return num1*num2;
}

const memoizedClumzyProduct = myMemoize(clumsysquare);

console.time("first call");
console.log(memoizedClumzyProduct(9467, 7649))
console.time("first call");

console.time("Second call");
console.log(memoizedClumzyProduct(9467, 7649))
console.time("Second call");
