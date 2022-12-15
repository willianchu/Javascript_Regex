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
    // X and Y can have or not any digits after decimal point.
    // can accept only integers as coordinates

    const regexLatitude = /^\([\-+]?(?:[0-8]\d?(?:\.\d+)?|90(?:\.0+)?),\s[\-+]?(?:(?:\d{2}|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?)\)$/;
    // [\+-]? - optional sign
    // (?:[0-8]\d?(?:\.\d+)?|90(?:\.0+)?) - latitude
    // (?:\.\d+)? - optional decimal point and digits	
    // |90(?:\.0+)? - or 90 and optional decimal point and digits
    // \s - space
    // [\+-]? - optional sign
    // (?:(?:\d{2}|1[0-7]\d)(?:\.\d+)?|180(?:\.0+)?) - longitude
    // \) - closing parenthesis

    for (let i = 0; i < n; i++) {
        const input = readLine().trim();
        console.log(regexLatitude.test(input) ? 'Valid' : 'Invalid');
    }
}