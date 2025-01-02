//HigherOrder Functions
//Rectangle
const RectangleData = [{width:25, length:10},{width:35, length:15},{width:45, length:25},{width:12, length:5}]

const calculateDiagonal=(Array)=>{
    let result=[]
    Array.forEach((data)=>{
        const{width,length}=data;
       result.push(Math.sqrt(Number((Math.pow(width,2))+ (Math.pow(length,2))))) 
    });
    return result
}
console.log("Diagonal: ",calculateDiagonal(RectangleData))
const calculateArea=(Array)=>{
    let result=[]
    Array.forEach((data)=>{
        const{width,length}=data;
       result.push(width*length) 
    });
    return result
}
console.log("Area: ",calculateArea(RectangleData))
const calculatePerimeter=(Array)=>{
    let result=[]
    Array.forEach((data)=>{
        const{width,length}=data;
       result.push(2*(width+length)) 
    });
    return result
}
console.log("Perimeter: ",calculatePerimeter(RectangleData))

//======================================================//
//HigherOrder Functions
//======================================================//

const diagonal = (object) =>{return Math.sqrt(Number((Math.pow(object.width,2))+ (Math.pow(object.length,2))))}
const area = (object) =>{return object.width*object.length}
const perimeter = (object) =>{return 2*(object.width+object.length)}

// const calculate=(Array, logic)=>{
//     let result=[]
//     Array.forEach((data)=>{
//         const{width,length}=data;
//        result.push(logic(data)) 
//     });
//     return result
// }

//OR

// const calculate=(Array, logic)=>{
//     let result=[]
//     for(let i=0; i<Array.length; i++){
//         result.push(logic(Array[i]))
//     }    ;
//     return result
// }

//OR
//like Map function
Array.prototype.calculate=function(logic){
    let result=[]
    for(let i=0; i<this.length; i++){
        result.push(logic(this[i]))
    }    ;
    return result
}

console.log("Diagonal: ",calculate(RectangleData, diagonal))
console.log("Area: ",calculate(RectangleData, area))
console.log("Perimeter: ",calculate(RectangleData, perimeter))