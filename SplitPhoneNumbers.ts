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
    // ContryCode= first
    // AreaCode= second
    // Number= third
    const regex = /^(\d{1,3})[- ](\d{1,3})[- ](\d{4,10})$/;

    const n: number = parseInt(readLine().trim(), 10);

    for (let i = 0; i < n; i++) {
        const phoneNumber: string = readLine().trim();
        const match = regex.exec(phoneNumber);
        if (match) {
            console.log(`CountryCode=${match[1]},LocalAreaCode=${match[2]},Number=${match[3]}`);
        } else {
            console.log('Invalid');
        }
    }
}