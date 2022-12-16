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
    // look for hackerrank in the tweet upper and lower
    const regex: RegExp = /hackerrank/i;
    let numberOfHackerrankTweets: number = 0;
    for (let i: number = 0; i < n; i++) {
        const tweet: string = readLine().trim();
        if (regex.test(tweet)) {
            numberOfHackerrankTweets++;
        }
    }
    console.log(numberOfHackerrankTweets);
}