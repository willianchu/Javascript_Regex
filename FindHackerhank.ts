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

// For every line,

// a- Print 1 if the conversation starts with hackerrank
// b- Print 2 if the conversation ends with hackerrank
// c- Print 0 if the conversation starts and ends with hackerrank
// d- Print -1 if none of the above.
function main() {
    // Enter your code here
}