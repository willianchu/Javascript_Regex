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
  // 1- Sample Input
  // 2
  // hackerrank has such a good ui that it takes no time to familiarise its environment
  // to familiarize oneself with ui of hackerrank is easy
  // 1
  // familiarize

  // 2- Sample Output
  // 2

  const n: number = parseInt(readLine().trim(), 10);
  const words: string[] = [];
  for (let i: number = 0; i < n; i++) {
    words.push(readLine().trim());
  }
  const t: number = parseInt(readLine().trim(), 10);
  for (let i: number = 0; i < t; i++) {
    let UKWord: string = readLine().trim();
    let USWord: string = UKWord.replace(/ize/g, 'ise');
    let count: number = 0;
    for (let j: number = 0; j < n; j++) {
      if (words[j] === UKWord || words[j] === USWord) {
        count++;
      }
    }
    console.log(count);
  }
  
}