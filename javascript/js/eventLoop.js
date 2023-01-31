console.log("Start")

setTimeout(function setTimeCB() {
    console.log("setTimeout CB")
}, 10);

fetch("https://reqres.in/api/{resource}")
.then(function FetchCB(res){
    let response = res.json()
    console.log("FetchCB: "+response)
})

console.log("end ")