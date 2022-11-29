// Task
// Given N lines of HTML, find the tag names (ignore any attributes) and print them as a single line of lexicographically ordered semicolon-separated values (e.g.: tag1; tag2; tag3).

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
    const regex: RegExp = /<\s*([a-z][a-z0-9]*)\b[^>]*>/gi;
    const n: number = parseInt(readLine().trim(), 10);
    let html: string = '';
    for (let i: number = 0; i < n; i++) {

        html += readLine().trim();
    }
    const matches: RegExpMatchArray = html.match(regex);
    const tags: string[] = [];
    if (matches) {
        matches.forEach((match: string) => {
            tags.push(match.replace(/<\s*([a-z][a-z0-9]*)\b[^>]*>/gi, '$1'));
        });
    }
    console.log(tags.sort().join(';'));
}
