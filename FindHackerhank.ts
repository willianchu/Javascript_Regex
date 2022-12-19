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
    const n: number = parseInt(readLine().trim(), 10);
    const regex: RegExp = /hackerrank/gi;
    for (let i: number = 0; i < n; i++) {
        const line: string = readLine();
        if (line.match(regex)) {
            if (line.match(/^hackerrank/gi)) {
                if (line.match(/hackerrank$/gi)) {
                    console.log(0);
                } else {
                    console.log(1);
                }
            } else {
                console.log(2);
            }
        } else {
            console.log(-1);
        }
    }
}