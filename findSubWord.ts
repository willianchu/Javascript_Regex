// We define a word character to be any of the following:

// An English alphabetic letter (i.e., a-z and A-Z).
// A decimal digit (i.e., 0-9).
// An underscore (i.e., _, which corresponds to ASCII value 95).
// We define a word to be a contiguous sequence of one or more word characters that is preceded and succeeded by one or more occurrences of non-word-characters or line terminators. For example, in the string I l0ve-cheese_?, the words are I, l0ve, and cheese_.

// We define a sub-word as follows:

// A sequence of word characters (i.e., English alphabetic letters, digits, and/or underscores) that occur in the same exact order (i.e., as a contiguous sequence) inside another word.
// It is preceded and succeeded by word characters only.
// Given n sentences consisting of one or more words separated by non-word characters, process q queries where each query consists of a single string, s. To process each query, count the number of occurrences of s as a sub-word in all n sentences, then print the number of occurrences on a new line.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Ruby aproach
// sentences = gets.to_i.times.map {gets}.join(' ')
// gets.to_i.times { puts sentences.scan(/\w#{gets.chomp}\w/).count }

function main() {
    // Enter your code here
  const numberOfSentences = parseInt(readLine().trim(), 10);
  const sentences = [];
  for (let i = 0; i < numberOfSentences; i++) {
    sentences.push(readLine().trim());
  }
  const numberOfQueries = parseInt(readLine().trim(), 10);
  const queries = [];
  for (let i = 0; i < numberOfQueries; i++) {
    queries.push(readLine().trim());
  }
  const result = [];
  for (let i = 0; i < numberOfQueries; i++) {
    let count = 0;
    const regex = new RegExp(`\\w${queries[i]}\\w`, 'g');
    // \\w${queries[i]}\\w = word character + query + word character
    for (let j = 0; j < numberOfSentences; j++) {
      count += (sentences[j].match(regex) || []).length;
    }
    result.push(count);
  } 
  console.log(result.join('\n'));
}