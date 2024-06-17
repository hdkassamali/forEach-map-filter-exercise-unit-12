/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/
function doubleValues(arr){
    // const newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     newArray.push(arr[i]*2);
    // }
    // return newArray;
    const newArray = [];
    arr.forEach(function(val){
        newArray.push(val * 2);
    })
    return newArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/
function onlyEvenValues(arr){
    // const newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         newArray.push(arr[i]);
    //     }
    // }
    // return newArray;

    const newArray = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArray.push(val);
        }
    })
    return newArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(arr){
    // const newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //     let newString = '';
    //     newString += arr[i][0];
    //     newString += arr[i][arr[i].length - 1];
    //     newArray.push(newString);
    // }
    // return newArray;

    const newArray = [];
    arr.forEach(function(val) {
        let newString = '';
        newString += val[0];
        newString += val[val.length - 1];
        newArray.push(newString);
    })
    return newArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 
*/
function addKeyAndValue(arr,key,value){
    // return arr.map(function(object) {
    //     const newObj = {};
    //     newObj[key] = value;
    //     for (let property in object) {
    //         newObj[property] = object[property];
    //     }
    //     return newObj;
    // })

    const newArray = [];
    arr.forEach(function(object) {
        const newObject = {};
        newObject[key] = value;
        for (let property in object) {
            newObject[property] = object[property];
        }
        newArray.push(newObject);
    })
    return newArray;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const object = {};
    str.toLowerCase().split('').forEach(function(char) {
        if (vowels.includes(char)) {
            object[char] = (object[char] || 0) + 1;
        }
    });
    return object;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

*/

function valTimesIndex(arr){
    return arr.map(function(val, idx) {
        return val * idx;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
*/

function extractFullName(arr){
    return arr.map(function(val) {
        return val['first'] + ' ' + val['last'];
    });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        if (val[key]) {
            return val;
        }
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.
*/

function find(arr, searchValue) {
    let matchedValue = undefined;
    arr.filter(function(val) {
        if (val === searchValue) {
            matchedValue = val
        };
    });
    return matchedValue;  
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.
*/

function findInObj(arr, key, searchValue) {
    let matchedValue = {};
    matchedValue = arr.filter(function(val) {
        if (val[key] === searchValue) {
            return val;
        }
    });
    return matchedValue[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
*/

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newString = '';
    str.toLowerCase().split('').filter(function(char) {
        if (!vowels.includes(char)) {
            newString += char;
        }
    });
    return newString;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).
*/

function doubleOddNumbers(arr) {
    const doubledArray = [];
    let filteredArray = [];
    arr.map(function(num) {
        doubledArray.push(num * 2);
    })
    filteredArray = doubledArray.filter(function(num) {
        if((num/2) % 2 === 1) {
            return num;
        };
    });
    return filteredArray;
}
