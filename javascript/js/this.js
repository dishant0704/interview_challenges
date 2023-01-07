// this keyword in Javascript (Implicit Binding)
// Explain 'this' keyword?

let famalyData = {

    name: "Ketan",
    lastName: 'Sawant',
    age: 35,
    
    child: {
        childName: 'Dishant',
        age: 16,
        gerDetails(){
            console.log(this.childName+" and "+this.name)
        }
    }

}

//=========================
famalyData.child.gerDetails();

class userName {
    constructor(n){
        this.name = n;
}
    getName() {
        console.log(this.name);
    };
}

const UserName = new userName('ketan')

UserName.getName();

// what is the output?
//====================

const user = {
    firstName: "Ketan",
    getName(){
        const firstName = "Dishant";
        return this.firstName
    },
};

console.log(user.getName()) // ketan "this refering parant node".

// what is the result of accessing its ref? why?
//==============================================
function makeUser(){
    return{
        name: "Ketan",
        ref: this
    };    
}

let user6 = makeUser(); // this calling here so it is reffering to window obj
console.log(user6.ref.name); // 

//now fixe above issue
 function makeUser(){
    return{
        name: "Ketan",
        ref(){
            return this;
        }
    }
}

let user7 = makeUser(); 
console.log(user7.ref().name) // Ketan now this refering to parant block

// What is the OutPut?
//====================

const user8 = {
    name: 'Ketan Sawant',
    logMassage(){
        console.log(this.name); 
    }
}

//user8.logMassage();
setTimeout(user8.logMassage(), 1000) //() missing 

const user9 = {
    name: 'Ketan Sawant',
    greet(){
        return `Hello, ${this.name}!`; 
    },
    farwell:() =>{
        return `Goodbay, ${this.name}!`; 
    }
}

console.log(user9.greet()); // output will be Ketan Sawant
console.log(user9.farwell()); // output will be undefind or "" it is because it is outer scrop

// Create ab object calculator
//====================

let calculator = {
    read(){
        this.a = +prompt("a = ", 0);
        this.b = +prompt("b = ", 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }     

}

//calculator.read(); //uncomment this
console.log(calculator.sum());
console.log(calculator.mul());

//====================

var length = 4;

function callBack(){
    console.log(this.length) //this is refering to length
}

const object = {
    length: 5,
    method (fn) {
        fn();
    }
};

object.method(callBack);

const object2 = {
    length: 5,
    method () {
        console.log(arguments)
        arguments[0]();
    }
};

object2.method(callBack, 2, 5); //3

// Implement this code

const calc = {
    total: 0,
    add(a){
        this.total +=a;
        return this;
    },
    multiply(a){
        this.total *=a;
        return this;
    },
    substract(a){
        this.total -=a;
        return this;
    }
}

const result = calc.add(20).multiply(2).substract(5).add(10);
console.log(result.total)
