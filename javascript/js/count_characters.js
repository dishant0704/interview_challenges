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