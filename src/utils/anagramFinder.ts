/**
 * Finds all valid English words that can be created using some combination
 * of the letters in the given input string.
 * @param input - The input string.
 * @param WORDS - The array of valid English words.
 * @returns The array of possible words.
 */
function getWords(input: string, WORDS: string[]): string[] {
    
    // Input validation to ensure it's a string
    if (typeof input !== 'string' || !Array.isArray(WORDS)) {
        throw new Error('Invalid input');
    }
    
    let possibleWords = new Set<string>();
    
    // Putting into a set instead of array to improve lookup speed
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
