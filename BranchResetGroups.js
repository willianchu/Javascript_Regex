// Task

// You have a test string S.
// Your task is to write a regex which will match S, with following condition(s):

// S consists of 8 digits.
// S must have "---", "-", "." or ":" separator such that string S gets divided in 4 parts, with each part having exactly two digits.
// S string must have exactly one kind of separator.
// Separators must have integers on both sides.

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
    //        ^(\d{2}(---|[-:.]))(\d{2}(\2)){2}\d{2}$
    //        ^\d\d(---|-|\.|:)(?:\d\d\1){2}\d\d$
    // RegExp(/^\d{2}(---|-|\.|:)(\d{2}\1){2}\d{2}$/);
    // Java     ^\\d{2}(---|-|\\.|:)(\\d{2}\\1){2}\\d{2}$
    inputString = readLine();

  const RegExString = /^\d\d(---|-|\.|:)(?:\d\d\1){2}\d\d$/.test(readLine());
  console.log(String(RegExString));

  // OR

  console.log( /^\d{2}((---)|-|\.|:)\d{2}(\1\d{2}){2}$/.test(readLine()) )
}

function main2() {
  console.log(/^\d{2}((---)|(-)|(.)|(:))\d{2}\1\d{2}\1\d{2}$/.test(readLine()))
}