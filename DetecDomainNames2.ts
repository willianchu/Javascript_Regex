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

// extract domain from all full path urls in html
function main() {
    const n = parseInt(readLine().trim(), 10);
    const answer: string[] = [];
    for(let i = 0; i < n; i++){
        const S = readLine();
        const regex = /https?[:]\/\/(?:www.|ww2.)?((?:(?:[-a-z0-9]+[.])+)[-a-z0-9]+)/;
        const result = S.match(regex);
        if(result!=null){
            answer.push(result[1]);
        }
    }
    console.log(answer);
    //console unique values, sorted alphabetically and separated by semicolon
    console.log([...new Set(answer)].sort().join(';'));
}