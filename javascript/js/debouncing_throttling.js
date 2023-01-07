// Debouncing and throttling in Javascript

// :: 1 ::
//--------
// Create a button UI and add debounce as follows
//  --> Show "Button Pressed <x> times" every time button is pressed
//  --> incress "Tgiggered <y> Times" count after 800ms of debounce

//debounce
//--------

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const debounceCount =  _.debounce(() =>{
//     count.innerHTML = triggerCount++;
// }, 800)

// btn.addEventListener("click",()=>{    
//     btnPress.innerHTML = pressedCount++;
//     debounceCount();
   
// })

// :: 1 ::
//--------
//throttle
//--------

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const start = new Date().getTime();

// const throttleCount = _.throttle(() =>{
//     const now = new Date().getTime();
//     console.log(now-start);
//     count.innerHTML = triggerCount++;
// }, 800)

// btn.addEventListener("click",()=>{    
//     btnPress.innerHTML = pressedCount++;
//     throttleCount();
   
// })

// :: 3 ::
//--------
//Create Debounce() Polyfill Implementation
//-----------------------------------------

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const myDeunceCount = (cb, d) =>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(...args);
//         },d)
//     }

// }

// const debounceCount =  myDeunceCount(() =>{
//     count.innerHTML = triggerCount++;
// }, 800)

// btn.addEventListener("click",()=>{    
//     btnPress.innerHTML = pressedCount++;
//     debounceCount();
   
// })

// :: 4 ::
//--------
//Create Throttle Polyfill Implementation
//--------

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

const myThrottle = (cb, d)=>{
    let last = 0;
    return function(...args){
        let now = new Date().getTime();
        if(now - last < d) return;
            last = now;
            return cb(...args);        
    };
};

const throttleCount = myThrottle(() =>{
    const now = new Date().getTime();
    console.log(now-start);
    count.innerHTML = triggerCount++;
}, 1000)

btn.addEventListener("click",()=>{    
    btnPress.innerHTML = pressedCount++;
    throttleCount();
   
})
