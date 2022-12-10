// Given a sentence, s, write a RegEx to match the following criteria:

// The first character must be the letter H or h.
// The second character must be the letter I or i.
// The third character must be a single space (i.e.: \s).
// The fourth character must not be the letter D or d.
// Given n lines of sentences as input, print each sentence matching your RegEx on a new line.

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
    const regex: RegExp = /^[Hh][Ii]\s[^Dd].*$/;
    // ^[Hh][Ii]\s This is the first part of the regex. It matches the first two characters of the string, which must be H or h followed by I or i and a space.
    // [^Dd] This is the second part of the regex. It matches the third character of the string, which must not be D or d.
    // .* This is the third part of the regex. It matches the rest of the string. It can be any character any number of times.
    let n: number = parseInt(readLine());
    for (let i: number = 0; i < n; i++) {
        let sentence: string = readLine();
        if (regex.test(sentence)) {
            console.log(sentence);
        }
    }

}