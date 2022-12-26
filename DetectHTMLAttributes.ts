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
    const HTML: string[] = [];
    for (let i: number = 0; i < n; i++) {
        HTML.push(readLine().trim());
    }
    const attributes: { [key: string]: number } = {};
    const regex: RegExp = /<\w+\s+([a-z]+="[^"]+")/g;
    for (let i: number = 0; i < n; i++) {
        const matches: RegExpMatchArray | null = HTML[i].match(regex);
        if (matches) {
            for (let j: number = 0; j < matches.length; j++) {
                const [attribute, value]: string[] = matches[j].split('=');
                if (!attributes[attribute]) {
                    attributes[attribute] = 1;
                }
            }
        }
    }
}

