/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let vowel =[]
    const arrString = str.split('')

    console.log(arrString.includes("e"));

    for (let i = 0; i < arrString.length; i++) {
        const element = arrString[i];
        console.log(element);

        if (element) {
            
        }
        
    }
}

countVowels("race")

// module.exports = countVowels;