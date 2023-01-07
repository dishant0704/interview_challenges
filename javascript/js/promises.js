// Promisess - PolyFills, Callbacks, Async/await, Output Based, Etc

// Synchronous Vs Asynchronous
// Promisess is Asynchronous code
// javascript run Synchronous code first and than Asynchronous

// what is Synchronous code
// execulted line by line Or top to bottom exection
//=========================
// console.log("start");
// console.log("Subscript to Artical");
// console.log("finished");

// what is Asynchronous code
// execulted after synchronous
//=========================
// console.log("start");
// setTimeout(() => console.log("Subscript to Artical"), 0);
// console.log("finished");

//console.log("start");

// function userAction(userName) {
//     setTimeout(() => {
//         return "Hi " + userName + " you login"
//     }, 0);
// }
// const userLog = userAction("ketan")
// console.log(userLog);

// CallBack function()
//====================
// function userAction2(userName, cb) {
//     setTimeout(() => {
//         cb("Hi " + userName + " you login");
//     }, 0);
// }
// const userLog2 = userAction2("ketan", function (mass) { console.log(mass); })

// promises
//=========
// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) {
//             resolve("it's Resolved");
//         } else {
//             reject(new Error("it's Rejected"));
//         }
//     }, 1000);
// })

// sub.then(
//     (res) => { console.log(res); }
// ).catch(
//     (error) => { console.log(error); }
// );

//=====================
//const sub2 = Promise.reject("it's Rejected");
// const sub2 = Promise.reject(new Error("it's Rejected"));
// console.log(sub2);
// sub2.then((res) => console.log(res));



//Promise chaining
//====================

function likeTheVideo_a(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${text}`)
        }, 1000)
    })
}
function likeTheVideo_b(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${text}`)
        }, 1000)
    })
}
function likeTheVideo_c(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`like the ${text}`)
        }, 1000)
    })
}

// Approach : A
//--------------

// likeTheVideo_a("Ramayana").then((res)=>{
//  console.log(res);
//  likeTheVideo_b("Mahabharat").then((res)=>{
//     console.log(res);
//     likeTheVideo_c("Chanakya").then((res)=>{
//         console.log(res)
//         });
//     });
// }).catch((err)=>console.error(err));

// Approach: B
//------------

// likeTheVideo_a("Ramayana").then((res)=>{
//  console.log(res);
//  return likeTheVideo_b("Mahabharat");
// }).then((res) =>{
//   console.log(res);
//  return likeTheVideo_b("Chanakya");
// }
// ).catch((err)=>console.error(err));

// Approach: C Promise All
//-------------------------
// one of the Promises fild it will fild 

// Promise.all([
//     likeTheVideo_a("Ramayana"),
//     likeTheVideo_b("Mahabharat"),
//     likeTheVideo_c("Chanakya")
// ]).then((res)=>console.log(res)).catch((err) => console.error(err));

// Approach: D Promise Race
//-------------------------
// one of the Promises fild it will return result 

// Promise.race([
//     likeTheVideo_a("Ramayana"),
//     likeTheVideo_b("Mahabharat"),
//     likeTheVideo_c("Chanakya")
// ]).then((res)=>console.log(res)).catch((err) => console.error(err));

// Approach: D Promise allSettled
//-------------------------
// Return all promises mean "fulfilled" and rejected 

// Promise.allSettled([
//     likeTheVideo_a("Ramayana"),
//     likeTheVideo_b("Mahabharat"),
//     likeTheVideo_c("Chanakya")
// ]).then((res)=>console.log(res)).catch((err) => console.error(err));

// Approach: E Promise any
//-------------------------
// Return only first "fulfilled" promise and ignore all
// If all promises rejected than only give an error.

// Promise.any([
//     likeTheVideo_a("Ramayana"),
//     likeTheVideo_b("Mahabharat"),
//     likeTheVideo_c("Chanakya")
// ]).then((res)=>console.log(res)).catch((err) => console.error(err));

// async and await
//====================

// const result = async () => {
//     {
//         try {
//             const mass_01 = await likeTheVideo_a("Ramayana");
//             const mass_02 = await likeTheVideo_b("Mahabharat");
//             const mass_03 = await likeTheVideo_c("Chanakya");

//             console.log([mass_01, mass_02, mass_03])

//         } catch {
//             console.error("Promises get fild"+ error);
//         }
//     }
// }

// result();

//console.log("stop");

//############################################
    // Quries 
//############################################

// what is the output
//====================

//:: 01 ::
//--------

// console.log('Start');

// const promise1 = new Promise((resolve, reject)=>{
//  console.log(1);
//  resolve (2);
// });

// promise1.then((res)=>console.log(res));

// console.log('end');

//Out Put is 
//Start
//1
//end
//2

//:: 02 ::
//--------

// console.log('Start');

// const promise2 = new Promise((resolve, reject)=>{
//  console.log(1);
//  resolve (2);
//  console.log(3);
// });

// promise2.then((res)=>console.log(res));

// console.log('end');

//Out Put is 
//Start
//1
//3
//end
//2

//:: 03 ::
//--------

// console.log('Start');

// const promise2 = new Promise((resolve, reject)=>{
//  console.log(1);
//  //resolve (2);
//  console.log(3);
// });

// promise2.then((res)=>console.log("Result: "+res));

// console.log('end');

//Out Put is 
//Start
//1
//3
//end

//:: 04 ::
//--------

// console.log('Start');

// const fn = () =>
//  new Promise((resolve, reject)=>{
//  console.log(1);
//  resolve ('sucess');
// });

// fn().then((res)=>console.log(res));
// console.log('end');

//Out Put is 
//Start
//1
//end
//sucess

//:: 05 ::
//--------

// function job(){
//     return new Promise(function(resolve, reject){
//         reject();
//     })
// }

// let promise = job();

// promise
// .then(function(){console.log("sucess 01");}) // reject
// .then(function(){console.log("sucess 02");}) // reject
// .then(function(){console.log("sucess 03");}) // reject
// .catch((function(){console.log("Error : 4");})) // Error display
// .then(function(){console.log("Sucess! 😎");}) // Mass display

//Out put will be
//Error : 4
//Sucess! 😎

//:: 06 ::
//--------

// function job(state){
//     return new Promise(function(resolve, reject){
//        if(state){
//         resolve ('sucess');
//        }else{
//         reject ('error');
//        }
//     })
// }

// let promise2 = job(true);

// promise2
// .then(function(){console.log("sucess 01"); return job(flase)}) // if resolved it will print
// .then(function(){console.log("sucess 02");}) // if resolved it will print
// .then(function(){console.log("sucess 03");}) // if resolved it will print
// .catch((function(){console.log("Error : 1");})) // Error display
// .then(function(){console.log("Sucess! 😎");}) // Mass display

//Out put will be
//sucess 01
//Error : 1
//Sucess! 😎

//:: 07 ::
//--------

// function job(state){
//     return new Promise(function(resolve, reject){
//        if(state){
//         resolve ('sucess');
//        }else{
//         reject ('error');
//        }
//     })
// }

// let promise2 = job(true);

// promise2
// .then(function(data){console.log("sucess 01"); return job(flase)})
// .then(function(data){if(data !== "ketan"){throw "defeat"; }else{console.log("sucess 02");} return job(true)})
// .then(function(data){console.log(data);})
// .catch((function(error){console.log(error); return job(flase)})) 
// .then(function(data){console.log(data); return new Error("test")}) 
// .then(function(data){console.log(data);})
// .catch((function(error){console.log(error);}))

//Out put will be
//sucess 01
//Error : 1
//Error

//:: 08 ::
//--------

// const firstPromise = new Promise((resolve,reject) =>{
//     resolve('firstPromise');
// })
// const secondPromise = new Promise((resolve,reject) =>{
//     resolve(firstPromise);
// })
// secondPromise
// .then((res)=>{
//     return res;
// })
// .then((res)=>{
//     console.log(res);
// })

//:: 08 ::
// Rewrite this example code using 'async/await' instead of '.then/catch'
//--------
//'.then/catch'
//----------
// function loadJson01(url){
//     return fetch(url).then((response)=>{
//         if(response.status == 200){
//             return response.json();            
//         }else{
//             throw new Error(response.status);
//         }
//     })
// }

// let data01 = loadJson01("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").catch((err) => console.log(err));

//console.log(data);

//'async/await'
//----------

// async function loadJson(url) {
//     const data = await fetch(url)
//     try {
//         const data = await fetch(url)
//         if (data.status == 200) {
//             return data.json();
//         } else {
//             throw new Error(response.status);
//         }
//         //return data;

//     } catch {
//         console.error( data.status+": "+data.statusText)
//     }

// }

// let data = loadJson("https://gbfs.citibikenyc.com/gbfs/en/station_information.json");

// console.log(data);

//:: 10 ::
// Solve Promise Reqursively
//--------

// function proRecurse(funcPromises){
//     if(funcPromises.length === 0) return;
//     const currPromies = funcPromises.shift();
//     currPromies.then((res)=>{console.log(res)}).catch((err)=>console.error(err));
//     proRecurse(funcPromises)
// }
// proRecurse([likeTheVideo_a('Ketan'), likeTheVideo_b('Pinakin'), likeTheVideo_c('Deepak')])

//Output will be 
// Ketan
//Pinakin
//Deepak

//:: 10 ::
// Promise Polyfill Implemetation
//-------------------------------

// function PromissPolyFill(executor){
// let onResolve, 
//     onReject,
//     isfullfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//     function resolve(val) {
//         isfullfilled = true
//         value = val;
//         if(typeof onResolve === "function"){
//             isCalled = true;
//             onResolve(val) 
//         }
       
//     }

//     function reject(val) {
//         isRejected = true;
//         value = val
//         if(typeof onReject === "function"){
//             isCalled = true;
//             onReject(val)
//         }
        
//     }
    
//     this.then = function(callBack){
//         onResolve = callBack;
//         if(isfullfilled && !isCalled){
//             called = true
//             onResolve(value)
//         }
//         return this
//     }
//     this.catch = function(callBack){ 
//         onReject = callBack; 
//         if(isRejected && !isCalled){
//             isCalled = true;
//             onReject(value)
//         }      
//         return this
//     }

//     try{
//         executor(resolve, reject)
//     }catch(error){
//         reject(error)
//     }
    

// }

// const examplePromise = new PromissPolyFill((resolve, reject)=>{

//     setTimeout(() => {
//         resolve(2);
//     }, 1000);

// });

// examplePromise.then((res) => console.log(res)).catch((err)=>console.error(err))

//:: 11 ::
// allPromise Polyfill Implemetation
//----------------------------------

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        if (!promises.length) {
            resolve = result;
            return;
        }
        let pending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res;
                pending--;

                if (pending === 0) {                    
                    resolve(result);
                }
            }, reject)

        });
    });
}

Promise.allPolyfill([
    likeTheVideo_a("Ramayana"),
    likeTheVideo_b("Mahabharat"),
    likeTheVideo_c("Chanakya")
]).then((res)=>console.log(res)).catch((err) => console.error(err));
