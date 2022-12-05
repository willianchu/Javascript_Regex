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
    const regex: RegExp = /([a-zA-Z0-9_-]+)@([a-zA-Z0-9]+)\.([a-zA-Z0-9]{1,3})/g;
    let answer: string = '';
    for (let i: number = 0; i < numberLines; i++) {
      const line: string = readLine();
      if(regex.test(line)) {
          answer += line.match(regex) + ';';
      }
      
      
  }
  answer = answer.slice(0, -1);
  const set: Set<string> = new Set(answer.split(';').sort());
  console.log(set);
}

Traveler@ngs.org;apps@ngs.org;askngs@nationalgeographic.com;askngs@nationalgeographic.com;feedback@natgeotv.com;genographic@ngs.org;genographicespanol@ngs.org;givinginfo@ngs.org;jbmccorm@ngs.org;maps@ngs.org;mpotts@ngs.org;newsdesk@nationalgeographic.com;ngassignment@ngs.org;ngsdigital@customersvc.com;ngsdigital@customersvc.com;ngsforum@nationalgeographic.com;ngsline@customersvc.com;pressroom@ngs.org;speakers@ngs.org;stock@ngs.org;topo@ngs.org

Traveler@ngs.org;apps@ngs.org;askngs@nationalgeographic.com;feedback@natgeotv.com;genographic@ngs.org;genographicespanol@ngs.org;givinginfo@ngs.org;jbmccorm@ngs.org;maps@ngs.org;mpotts@ngs.org;newsdesk@nationalgeographic.com;ngassignment@ngs.org;ngsdigital@customersvc.com;ngsforum@nationalgeographic.com;ngsline@customersvc.com;pressroom@ngs.org;speakers@ngs.org;stock@ngs.org;topo@ngs.org