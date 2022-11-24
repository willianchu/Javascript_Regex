// Task

// You have a test string S.
// Write a regex that can match all occurrences of o followed immediately by oo in S.

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
    // Enter your code here
  const re = /o(?=oo)/g; 
  const S = readLine();
  console.log(`Number of matches : ${S.match(re).length}`);
}