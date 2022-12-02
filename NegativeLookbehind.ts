// Task

// You have a test String S.
// Write a regex which can match all the occurrences of characters which are not immediately preceded by vowels (a, e, i, u, o, A, E, I, O, U).

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
    const regex: RegExp = /(?<![aeiouAEIOU])./g;
    // const re = /(?<![aeiouAEIOU])./g; // not preceded by a vowel
    const S: string = readLine();
    // const S = readLine();
    console.log("Number of matches :", S.match(re).length);
}