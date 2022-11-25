// Task

// You have a test String S.
// Write a regex which can match all characters which are not immediately followed by that same character.
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
    // /(.)(?!\1)/g
    // /(.)(?!\1)/

    const re = /(.)(?!\1)/;
    const S = readLine();
    console.log(`Number of matches : ${S.match(re).length}`);
}