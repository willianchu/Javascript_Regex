// The rules are :

// 1. It should be of format : <local-part>@<domain-part>
// 2. Local-part can contain Alphanumeric-character or .(dot)
// 3. Domain-part can contain Alphanumeric-character or .(dot)

// not only word characters but "." can also be present in the part before @

// emails ending in "." are not acceptable. for example "abc.fds@wohoo.co.in." is not acceptable
// 'use strict';


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
    
    const numberLines: number = parseInt(readLine().trim(), 10);
    
    const regex: RegExp = /\b[\w\.]+@\w+\.[\w\.]+\b/g;
    

    // passed in 2 cases 0 and 1
    // const regex: RegExp = /([a-zA-Z0-9_-]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{1,3})/g;
    // passed in 3 cases in cases 0 1 3
    // const regex: RegExp = /(\S+@\S+\.\w+)/g;
    // const regex: RegExp = \b[\w\.]+@\w+\.[\w\.]+\b;
    // const regex: RegExp = /[\w\.]+@\w+\.[\.\w]*\w/g;
    // const regex: RegExp =[\w_\.]+@[\w_\.]+\.[a-z]{2,3};
    // const regex: RegExp = /\b(?:\w+\.)*\w+@(?:\w+\.)+\w+/;
    // const regex: RegExp = /\b([.a-zA-Z0-9_\/]*@[a-zA-Z0-9_\/]*\.[a-zA-Z0-9_\/.]*)\b/g;
    // const regex: RegExp = /\b[\da-zA-Z\._\-]+@[a-zA-Z\.]+\.[a-zA-Z]{1,3}\b/;
    let answer: string = '';
    for (let i: number = 0; i < numberLines; i++) {
      const line: string = readLine();
      if(regex.test(line)) {
          answer += line.match(regex) + ';';
      }
      
      
  }
  answer = answer.slice(0, -1);
  const set: Set<string> = new Set(answer.split(';').sort());
  answer = Array.from(set).join(';');
  console.log(answer);
}
