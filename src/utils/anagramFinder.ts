function anagramFinder(input, WORDS) {
    let possibleWords = new Set();

    function generatePermutations(str, prefix="") {
        if (str.length <= 1) {
            let word = prefix + str;
            if (WORDS.includes(word)) {
                possibleWords.add(word);
            }
        } else {
            for (let i=0; i<str.length; i++) {
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
