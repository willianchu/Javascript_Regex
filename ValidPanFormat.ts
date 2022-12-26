// SSN in India is a PAN number
// <char><char><char><char><char><digit><digit><digit><digit><char>
// <char> is an uppercase English alphabet
// length of PAN is 10
// answer just YES or NO

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
    const regex: RegExp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    for (let i: number = 0; i < n; i++) {
      console.log(regex.test(readLine().trim()) ? 'YES' : 'NO');
    }

}