# AnagramFinder
The AnagramFinder is a powerful tool designed to unlock the potential words hidden within a string. It accepts any string as input and produces a list of valid English words that can be constructed using some or all of the letters from the input string.

# Key Features:

1. __Comprehensive Word Generation__: From single-letter words to the entire length of the input string, it identifies every potential valid English word.
1. __Efficient Look-Up__: Integrated with a dictionary of valid English words, ensuring the output consists of recognized words.
1. __Adaptable__: Whether you're trying to decipher potential words in a scramble or need to identify anagrams, the AnagramFinder is tailored to suit your needs.

# Use Cases:

* __Word Games__: Enhance your gameplay in word-based games by identifying potential words from given letters.
* __Literary Analysis__: Discover hidden word patterns or potential anagrams in texts.
* __Education__: A useful tool for students to explore word formations and enhance vocabulary.

# Performance:
Optimized for performance, the feature leverages efficient algorithms and data structures to deliver results swiftly. However, it's recommended to limit the input string length to avoid potential extensive computations.

# Dependencies

## Node.js
Make sure Node.js is installed on your system. You can download it from here.

## NPM
Ensure you have NPM (Node Package Manager) installed, which comes with Node.js.

## Typescript
Install TypeScript using the following command:
```
brew install typescript
```

# How to run

1. Clone the repository.
1. Navigate to the project directory.
1. Run `npm install` to install necessary dependencies.
1. Compile the TypeScript files using tsc.
1. Run the compiled JavaScript file with your desired input string using the following command:
   - `node anagramFinder.js inputString  words.txt`
   - Replace __inputString__ with the string for which you want to find the anagrams.

# Words Dictionary

The __words.txt__ file contains the dictionary of 3,000 valid English words used for look-up. Ensure that this file is placed in the appropriate directory within the project. __Source__: https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/

# Contibuting

Feel free to contribute to the project by reporting issues or submitting pull requests.