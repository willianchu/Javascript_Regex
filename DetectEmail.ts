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
        const numberLines: number = parseInt(readLine().trim(), 10);
    const regex: RegExp = /([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{1,3})/g;
    let answer: string = '';
    for (let i: number = 0; i < numberLines; i++) {
      const line: string = readLine();
      if(regex.test(line)) {
          console.log("quick");
          answer += line.match(regex) + ';';
      console.log(answer);
      }
      
      
  }
  //remone last ;
  answer = answer.slice(0, -1);
  return answer.split(';').sort().join(';');
}

bd@tnmbonline.com;customerservice@tnmbonline.com;ibd@tnmbonline.com;nricell@tnmbonline.com;tmbankhi@sancharnet.in
bd@tnmbonline.com;customerservice@tnmbonline.com;ibd@tnmbonline.com;nricell@tnmbonline.com;ttn_tmbankhi@sancharnet.in