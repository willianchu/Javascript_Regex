// Task

// You have a test string S.
// Your task is to write a regex which will match S, with following condition(s):

// S consists of tic or tac.
// tic should not be immediate neighbour of itself. The number of consecutive occurrences of tic must be less than 2. --> (tac(tac)*tic(tac)*)
// The first tic must occur only when tac has appeared at least twice before. --> tac(tac)*tic(tac)*

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
    const re = /^(tac(tac)*tic(tac)*|tac(tac)*tac(tac)*)$/;
    const S = readLine();
    console.log(re.test(S) ? 'true' : 'false');
}