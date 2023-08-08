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

* __Usage of Sets__: Utilizing Set for storing possible words and a word dictionary enhances the lookup speed, as the average time complexity for searching within a Set is O(1). This is an excellent choice for optimizing the lookup process, especially when dealing with large dictionaries.
* __Permutation Generation__: The recursive algorithm used for generating permutations of the input string has a time complexity of O(n!), where n is the length of the input string. This can be computationally expensive for large strings, but it ensures that every possible permutation is explored.
* __Substring Operations__: The algorithm uses the substring method, which has a time complexity of O(n). While this is generally efficient, it does add to the overall computational time, especially within the recursive loop.
* __Recursive Stack__: The recursive nature of the permutation function may cause a stack overflow for very long strings. This is an inherent limitation of recursive algorithms and can be mitigated by limiting the input string's length.
* __Set Storage__: The usage of Set ensures that there are no duplicate words, thus optimizing memory usage.
* __Input String Length__: As the length of the input string grows, the number of permutations grows factorially. This can lead to a rapid increase in both processing time and memory usage. It's advisable to set practical limits on the input string's length to ensure responsive performance.
* __Potential Optimizations__
  - __Pruning__: Implementing pruning techniques to eliminate unnecessary recursion could optimize the performance further. For example, if a partial permutation cannot lead to a valid word, further exploration of that branch can be skipped.
  - __Parallel Processing__: The algorithm could be parallelized to take advantage of multi-core processors, further reducing the execution time.
  - __Caching__: Implementing caching strategies to store previously computed results might help in scenarios where repeated calculations occur.

# Dependencies

## Node.js
Make sure Node.js is installed on your system.

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