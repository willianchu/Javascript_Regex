// American English and British English differ in several aspects which are reflected in their spelling. One difference frequently observed, is that words written in American English, which have a suffix ze often end in se in British English. Given the American-English spelling of a word which ends in ze your task is to find the total count of all its British and American variants in all the given sequences of words. i.e. you need to account for the cases where the word occurs as it is given to you (i.e. the version ending in -ze) and you also need to find the occurrences of its British-English counterparts (i.e, the version ending in -se).

// Input Format

// First line contains N, N lines follow each line contains a sequence of words (W) separated by a single space. Next line contains T. T test cases follow in a new line. Each line contains the American English spelling of a word (W')

// Constraints

// 1 <= N <= 10
// Each line doesn't contain more than 10 words (W)
// Each character of W and W' is a lowercase alphabet.
// If C is the count of the number of characters of W or W', then
// 1 <= C <= 20
// 1 <= T <= 10
// W' ends with ze ( US version of the word)

// Output Format

// Output T lines and in each line output the total number of American and British versions of (W') in all of N lines that contains a sequence of words.

// Sample Input:

// 2
// hackerrank has such a good ui that it takes no time to familiarise its environment
// to familiarize oneself with ui of hackerrank is easy
// 1
// familiarize

// Sample Output:

// 2
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

function main() {
  const n: number = parseInt(readLine().trim(), 10);
  const words: string[] = [];
  for (let i: number = 0; i < n; i++) {
    words.push(readLine().trim());
  }
  const t: number = parseInt(readLine().trim(), 10);
  for (let i: number = 0; i < t; i++) {
    let UKWord: string = readLine().trim();
    let USWord: string = UKWord.replace(/ze$/, 'se');
    let count: number = 0;
    for (let j: number = 0; j < n; j++) {
      count += words[j].split(' ').filter((word: string) => word === UKWord || word === USWord).length;
    }
    console.log(count);
  }
  
}