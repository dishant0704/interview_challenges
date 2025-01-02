// Event propagation in Javascript

// :: 1 ::
//========
// What is Event Bubbling?

const parDiv = document.querySelector(".ep_div");
const from= document.querySelector("Form");
const button= document.querySelector(".ep_button");

// parDiv.addEventListener("click", function(){
//     alert("div")
// })

// from.addEventListener("click", function(){
//     alert("from")
// })

// button.addEventListener("click", function(){
//     alert("button")
// })

// :: 2 ::
//========
// Name five of evemt which are not Bubbling.

// :: 3 ::
//========
// event.target vs this.target bs event.curremtTraget

// parDiv.addEventListener("click", func01)
// from.addEventListener("click", func01)
// button.addEventListener("click", func01)

// function func01(event){
//     alert(
//         "Current Target: "+event.currentTarget.tagName+
//         ", target: "+event.target.tagName+
//         ", This Target: "+this.tagName) 
// }

// :: 4 ::
//========
// What is event Capturing Or tricking?

// parDiv.addEventListener("click", alert("Div"),{capture:true});
// from.addEventListener("click", alert("form"),{capture:true});
// button.addEventListener("click", alert("Button"),{capture:true});

// :: 5 ::
//========
// How to stop bubbling or Capturing?
// use stopPropagation()

// parDiv.addEventListener("click", function(e){e.stopPropagation(); alert('Dive')});
// from.addEventListener("click", function(e){e.stopPropagation(); alert('Form')});
// button.addEventListener("click", function(e){e.stopPropagation(); alert('Button')});

// :: 6 :: IMP Q
//========
// What is event delegation?
// document.querySelector(".products").addEventListener("click", (event)=>{

// console.log(event.target.tagName)
// console.log(event.target.closest("SPAN"));

// })

// :: 7 :: IMP Q
//========
// What's the Output?
// execute Bubbling event in to from >> button >> div 

// parDiv.addEventListener("click", function(e){alert("Div")});
// from.addEventListener("click", function(e){alert("form")},{capture:true});
// button.addEventListener("click", function(e){alert("Button")});

// :: 8 :: IMP Q
//-----------------------------------------
// Create a Modal which closes by clicking on negative space.

const container = document.getElementById("myModal");
const modButton = document.getElementById("myBtn");
const closeBtn = document.querySelector(".close");


modButton.addEventListener("click",() => {
    toggleModal(true);
});

closeBtn.addEventListener("click",() => {
    toggleModal(false);
});

container.addEventListener("click",(event) => {
    if(event.target.className === "modal"){toggleModal(false);}
});

//OR

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

function toggleModal(toggle){
    container.style.display = toggle? "block" : "none"
}