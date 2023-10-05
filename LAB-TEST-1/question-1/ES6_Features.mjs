function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)){
        console.log('Input is not an array.');
        reject(new Error("Input is not an array"));
        return;
    }
    
    let filteredWords = arr.filter(item => typeof item == 'string');
    let lowerCaseWords = filteredWords.map(str => str.toLowerCase());

    if (lowerCaseWords.length > 0){
        resolve(lowerCaseWords);
    } else {
        reject(new Error("No string types were in the array"))
    }
    });
}

//Example

const mixed_arr = ['Hello', false, 32421, 'LABTEST', 'ONE', 3.14, true]
lowerCaseWords(mixed_arr)
.then(result => {
    console.log('Resolved', result);
})
.catch(error => {
    console.error('Error', error.message)
})