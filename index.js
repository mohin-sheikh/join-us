// Q1. Find the longest word in a string.
function getLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(getLongestWord("The quick brown fox jumped over the lazy dog"));   // output -> jumped


// Q2. Repeat a string n times.
function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("abc", 3));  // output -> abcabcabc
// Note : The function uses the .repeat() method to repeat the input string n times and returns the repeated string.
// or we can also use the following function

function repeatString2(str, n) {
    return new Array(n + 1).join(str);
}
console.log(repeatString2("abc", 3)); // output -> abcabcabc


// Q3. Remove duplicates in an array
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 20, 3, 1, 3, 3])); // output -> [ 1, 20, 3 ]


// Q4. Remove falsy values
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsy([42, "everything", "", 2, false, "everything"]));  // output -> [ 42, 'everything', 2, 'everything' ]
// Note : The `Boolean` function returns true for truthy values and false for falsy values.


// Q5. Truncate a string
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
}
console.log(truncateString('Absolute victory', 3)); // output -> Abs...
