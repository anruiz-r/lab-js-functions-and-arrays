// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1 , num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num1 < num2) {
        return num2;
    } 
    else if (num1 === num2) {
        return num1;
    }

}
console.log(maxOfTwoNumbers(5,4));

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    if (arrayWords.length === 0) {
        return null;
    }
    let longestWord = " ";
    for(let i = 0; i <arrayWords.length; i++) {
        if(arrayWords[i].length > longestWord.length) {
            longestWord = arrayWords[i];
        }        
    }
    return longestWord;
}

    /*let arraylength = [ ];
    
    for (let i = 0; i < arrayWords.length; i++) {
    arraylength.pop(arrayWords[i].length);
    }
    console.log(arraylength);
    let maxNum= Math.max (arraylength);
    return maxNum;*/


console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
    sum += num[i];
    }
    return sum  
}
console.log(sumNumbers(numbers));




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
    let counter = 0;
    if (num.length === 0) {
        return 0;
    }
    for(let i = 0; i < num.length; i++) {
       counter += 1;
    }
    return sumNumbers(num) / counter;
}

console.log(averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords, word) {
    if ((arrayWords.length === 0) || (word.length === 0)) {
        return null;
    }
    for(let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i] === word) {
            return true;
        }
     }
     return false;

}

console.log(doesWordExist(words2, "trouble"));