//ketan sawant[UI Developer]
//ketandutt@gmail.com

findCharCount('Ketan Sawant@123kkmm10')

function findCharCount(str) {
    var regex = /[a-zA-Z0-9]/g; // only count letters and numbers

    var finalStr = str.match(regex)
    var char = "";

    var charArray = []
    var countArray = []

    //console.log("main lenght: " + str.length + ", Final length: " + finalStr.length)

    for (var i = 0; i < finalStr.length; i++) {
        var char = finalStr[i];

        if (charArray.includes(char)) {
            var dupInx = charArray.indexOf(char)
            countArray[dupInx]++;
            //console.log(char + " Repited, ")

        } else {
            charArray.push(char);
            //countArray.char = 1
            countArray.push(1);
            //console.log(char);
        }

    }

    console.log(printCharCount(charArray, countArray))
};


// Print charector and count array

function printCharCount(arrayChar, arrayCount) {

    var printText = "";

    if (arrayChar.length === arrayCount.length) {

        for (var i = 0; i < arrayChar.length; i++) {
            printText = printText + arrayChar[i] + ":" + arrayCount[i] + ", "
        }

    } else {
        console.log("both array count are not equal")
    }
    return printText;
};

//Count repeated words and displayed

function countWord (srt){   
    var wordcnt = srt.replace(/[^\w\s]/g, "").split(/\s+/).reduce(function(map, word){
        map[word] = (map[word]||0)+1;
        return map;
    }, Object.create(null));
    return wordcnt
}

console.log(countWord("Hi there and hello there. Welcome and hello there."))

// Count repeated words and displayed

function countChar (srt){ 
    //var srtArray = srt.split(/\s+/)
    var srtArray = [...srt.replace(/[^\w\s]/g, "")];
    var wordcnt = srtArray.reduce(function(map, char){
        map[char] = (map[char]||0)+1;
        return map;
    }, Object.create(null));
    return wordcnt
}

console.log(countChar("ketan sawant"))

//I'm trying to make a function that counts duplicate letter values and I would like to do that specifically with the reduce function.
//letterFrequency('aaAabb dddDD hhcc')
//Should return: [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]

function letterFrequency(srt){
    var srtArray = [...srt.replace(/[^\w\s]/g, "")];
    var lettersArray = srtArray.reduce(function(acc, curr){
        acc[curr] = (acc[curr]||0)+1;        
        return acc;
    }, Object.create(null));

    var finalArray = Object.keys(lettersArray).map((key)=>{
        locArray = [key, lettersArray[key]]        
        return locArray
    })
    console.log(finalArray)
    console.log(Object.keys(lettersArray).length+" == "+Object.values(lettersArray).length)
}
letterFrequency('aaAabb dddDD hhcc');

//GSPANN technologies
//character's count.
//Return the output in the below format as String.
//Ex: 1. "abdbcbccc"
//Output: "a:1,b:3,d:1,c:4"

function charCount_ketanVesion(str){
    var strArray = [...str]
    var newString = strArray.reduce((acc, curr)=>{
        if(acc[curr]=(acc[curr]||0)+1){
            return acc;
        }
    },Object.create(null))
    var outputStr = ""
    var newArray = Object.keys(newString).map((key)=>{
        return [...outputStr,(key+":"+ newString[key])]
    })
    console.log('formated String Ketan Vesion:',newArray.join(', '));
    //console.log(newArray);
}

charCount_ketanVesion("abdbcbccc");

// Kamlesh version 
//abcdbabdcbed
function charCount_kamleshVersion01(string) {
    console.log("Char count");
    let charCount = [...string].reduce((tmp, item) => {
        if (!tmp[item]) {
            tmp[item] = 0;
        }
        tmp[item]++;
        return tmp;
    }, {});

    // converting to array
    let formatedArray = Object.keys(charCount).map(item=>(item+':'+charCount[item]));
    console.log('String:',string);
    console.log('Char Count Object:',charCount);

    console.log('formated Array:',formatedArray);
    console.log('formated String:',formatedArray.join(','));

}
charCount_kamleshVersion01("abcdbabdcbed")

//If you are using nested array then
function charCount_kamleshVersion02(string) {
    console.log("Using nested array");
    //.replace(/^\s+|\s+$/gm,'')
    let charCount = [...string].reduce((acc,curr)=>{
        if(!acc[curr]){
            acc[curr] = 0
        }
        acc[curr]++;
        return acc;
    }, {});

    //formateArray as required 
    formatedArray = Object.keys(charCount).map(item =>([item,charCount[item]]));
    console.log('formated Array:',formatedArray);
    //console.log('formated String:',formatedArray.map(item=>item.join(':')).join(','));
    console.log('formated String:',JSON.stringify(formatedArray));
}
charCount_kamleshVersion02('aaAabb dddDD hhcc');
