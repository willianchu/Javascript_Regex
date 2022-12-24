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

// Enter your code here
// detect:
// (1) Identifier - question/xxxxx/subject is the pattern (xxxxx is the 5 digit question Identifier)
// (2) Question text (which is on the Hyperlink to the question)
// (3) How long ago the question was asked. - xx hours ago is the pattern
//  Please note, that since this markup is real markup from the website, it is likely to contain some stray control and escape characters, unexpected white spaces and newlines.

function main() {
  const regex: RegExp = /question\/(\d{5})\/.*>(.*)<\/a>.*(\d{1,2} hours ago)/g;
  let line: string = readLine();
  while (line !== null) {
    let match: RegExpExecArray;
    while ((match = regex.exec(line)) !== null) {
      console.log(match[1] + ';' + match[2] + ';' + match[3]);
    }
    line = readLine();
  }
}
  
  
