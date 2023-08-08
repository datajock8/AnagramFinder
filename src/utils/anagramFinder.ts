import * as fs from 'fs';

const input = process.argv[2]; // Get the input string from the command line
const wordsFilePath = process.argv[3]; // Get the path to the words file from the command line

if (!input || !wordsFilePath) {
    console.error('Please provide an input string as the first argument and the path to the words file as the second argument.');
    process.exit(1);
}

// Read the WORDS from the provided file
let WORDS: string[];
try {
    WORDS = fs.readFileSync(wordsFilePath, 'utf8').split('\n'); // Assuming one word per line
} catch (error) {
    console.error('Error reading words file:', error.message);
    process.exit(1);
}

function getWords(input: string, WORDS: string[]): string[] {
    if (typeof input !== 'string' || !Array.isArray(WORDS)) {
        throw new Error('Invalid input');
    }

    let possibleWords = new Set<string>();
    const wordSet = new Set(WORDS);

    function generatePermutations(str: string, prefix: string = ""): void {
        if (str.length <= 1) {
            let word = prefix + str;
            if (wordSet.has(word)) {
                possibleWords.add(word);
            }
        } else {
            for (let i = 0; i < str.length; i++) {
                let cur = str.substring(i, i + 1);
                let before = str.substring(0, i);
                let after = str.substring(i + 1);
                generatePermutations(before + after, prefix + cur);
            }
        }
    }

    generatePermutations(input);
    return Array.from(possibleWords);
}

const results = getWords(input, WORDS);
console.log(results); // Outputs the possible anagrams
