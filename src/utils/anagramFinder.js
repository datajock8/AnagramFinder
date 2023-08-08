"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = process.argv[2]; // Get the input string from the command line
var wordsFilePath = process.argv[3]; // Get the path to the words file from the command line
if (!input || !wordsFilePath) {
    console.error('Please provide an input string as the first argument and the path to the words file as the second argument.');
    process.exit(1);
}
// Read the WORDS from the provided file
var WORDS;
try {
    WORDS = fs.readFileSync(wordsFilePath, 'utf8').split('\n'); // Assuming one word per line
}
catch (error) {
    console.error('Error reading words file:', error.message);
    process.exit(1);
}
function getWords(input, WORDS) {
    if (typeof input !== 'string' || !Array.isArray(WORDS)) {
        throw new Error('Invalid input');
    }
    var possibleWords = new Set();
    var wordSet = new Set(WORDS);
    function generatePermutations(str, prefix) {
        if (prefix === void 0) { prefix = ""; }
        if (str.length <= 1) {
            var word = prefix + str;
            if (wordSet.has(word)) {
                possibleWords.add(word);
            }
        }
        else {
            for (var i = 0; i < str.length; i++) {
                var cur = str.substring(i, i + 1);
                var before = str.substring(0, i);
                var after = str.substring(i + 1);
                generatePermutations(before + after, prefix + cur);
            }
        }
    }
    generatePermutations(input);
    return Array.from(possibleWords);
}
var results = getWords(input, WORDS);
console.log(results); // Outputs the possible anagrams
