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
    // not working /^(\2tic|(tac))+$/ 3 errors
    // not working /^(tac(tac)*tic(tac)*)+$/ 1 error
    // not working /^(tac(tac)*tic(tac)*|tac(tac)*tac(tac)*)$/ 3 errors
    // not working /tac((tactic)|(tac))*$/ 2 errors
    // works /^(tac){2,}((tic)(?!tic)(tac)*)+$/

    const re = /^(tac)(tactic|tac)+$/; // best solution
    
    // ?! is a negative lookahead
    // + is a greedy quantifier
    const S = readLine();
    console.log(re.test(S) ? 'true' : 'false');

}