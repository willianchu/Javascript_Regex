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
    const n = parseInt(readLine().trim(), 10);
    // For a valid (latitude, longitude) pair:
    // -90<=X<=+90 and -180<=Y<=180.
    const regexLatitude = /^[(](-?([1-8]?[0-9]|90)),\s(-?([1]?[0-7][0-9]|180|[0-9]?[0-9]))[)]$/;
    for (let i = 0; i < n; i++) {
        const input = readLine().trim();
        console.log(regexLatitude.test(input) ? 'Valid' : 'Invalid');
    }
}