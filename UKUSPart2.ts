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
    const n: number = parseInt(readLine().trim(), 10);
    const words: string[] = [];
    for (let i: number = 0; i < n; i++) {
      words.push(readLine().trim());
    }
    const t: number = parseInt(readLine().trim(), 10);
    for (let i: number = 0; i < t; i++) {
      let UKWord: string = readLine().trim();
      let USWord: string = UKWord.replace(/ou$/, 'o');
      let count: number = 0;
      for (let j: number = 0; j < n; j++) {
        count += words[j].split(' ').filter((word: string) => word === UKWord || word === USWord).length;
      }
      console.log(count);
    }
    
  }