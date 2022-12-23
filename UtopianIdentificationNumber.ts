// A new identification number is given for every Citizen of the Country Utopia and it has the following format.

// The string must begin with between 0-3 (inclusive) lowercase letters.
// Immediately following the letters, there must be a sequence of digits (0-9). The length of this segment must be between 2 and 8, both inclusive.
// Immediately following the numbers, there must be atleast 3 uppercase letters.
// Your task is to find out if a given identification number is valid or not.
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
    const regex: RegExp = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}$/;
    for (let i: number = 0; i < n; i++) {
        const utopianIdentificationNumber: string = readLine().trim();
        console.log(regex.test(utopianIdentificationNumber) ? 'VALID' : 'INVALID');
    }
}