// Motive of this snippets is to split the array into chunks given in the argument.
// Please fix the mistakes in this code. Desired output is mentioned at the end of the snippets.

 

function chunkArrayInGroups(array, chunkSize) {
    const arrayLength = array.length;
    const remainingElements = arrayLength % chunkSize;
    const totalArrayChunks = Math.floor(arrayLength / chunkSize);

 

    const response = [];
    let currentChunkSize = 0;
    let myLocalChunk = [];

 

    for (let i = 0; i < arrayLength; i++) {
        let j = i;
        myLocalChunk.push(array[i]);
        j = j + 1;
        if (j % chunkSize === 0) {
            response.push(...myLocalChunk);
            myLocalChunk.length = 0;
            currentChunkSize = currentChunkSize + 1;
        } else {
            if (currentChunkSize === totalArrayChunks && remainingElements === myLocalChunk.length) {
                response.push(myLocalChunk);
            }
        }
    }

 

    return response;
}

 

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
// Expected [1,2,3],[4,5,6],[7,8,9],[10,11]