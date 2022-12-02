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
    const sentences: string[] = [];
    const n: number = parseInt(readLine().trim(), 10);
    for(let i: number = 0; i < n; i++) {
      sentences.push(readLine().trim());
    }

    let count: number = 0;
    const m: number = parseInt(readLine().trim(), 10);
    for(let i: number = 0; i < m; i++) {
      count = 0;
      const word: string = readLine().trim();
      for(let j: number = 0; j < n; j++) {
        const regex: RegExp = new RegExp(`\\b${word}\\b`, 'gi');
        const matches: RegExpMatchArray | null = sentences[j].match(regex);
        if(matches) {
          count += matches.length;
        }
      }
      console.log(count);
    }
}