// In a galaxy far, far away, on a planet different from ours, each computer username uses the following format:

// It must begin with either an underscore, _ (ASCII value 95), or a period, . (ASCII value 46).
// The first character must be immediately followed by one or more digits in the range 0 through 9.
// After some number of digits, there must be 0 or more English letters (uppercase and/or lowercase).
// It may be terminated with an optional _ (ASCII value 95). Note that if it's not terminated with an underscore, then there should be no characters after the sequence of 0 or more English letters.
// Given n strings, determine which ones are valid alien usernames. If a string is a valid alien username, print VALID on a new line; otherwise, print INVALID.

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
    const n: number = parseInt(readLine().trim(), 10);
    for (let i: number = 0; i < n; i++) {
        const username: string = readLine().trim();
        const regex: RegExp = /^[_.]\d+[a-zA-Z]*_?$/;
        // [_.] - either _ or .
        // \d+ - one or more digits
        // [a-zA-Z]* - zero or more letters
        // _? - zero or one _
        
        console.log(regex.test(username) ? 'VALID' : 'INVALID');
    }

  
}