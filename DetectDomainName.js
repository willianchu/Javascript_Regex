// Identify unique urls
// Input Format

// The first line contains the number of lines in the fragment (N). This is followed by N lines from a valid HTML document or fragment.

// Constraints

// N < 100
// Number of characters in the test fragments <= 10000 characters.
// Characters will be restricted to ASCII. Fragments for the tests will be picked up from Wikipedia. Also, some tests might not have text or names on the links.

// Output Format

// If there are M links in the document, display each of them in a new line. The link and the text name must be separated by a "," (comma) with no spaces between them.
// Strip out any extra spaces at the start and end position of both the link and the text name before printing.
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
    // 2 errors fail in case 3 and 5
    // const re = /<a.*?href="(.*?)".*?>(.*?)<\/a>/g;
    // const n = parseInt(readLine(), 10);
    // let html = '';
    // for (let i = 0; i < n; i++) {
    //     html += readLine();
    // }
    // let match;
    // while ((match = re.exec(html)) !== null) {
    //     console.log(match[1] + ',' + match[2].trim());
    // }

    // 1 error fail in case 5 
    // const results = [];
    // const re = /<a .*?href=\"([^\"]+)\"[^>]*>(?:\s*<[^>]+>)*(.*?)</g;
    // const n = parseInt(readLine(), 10);
    // let html = '';
    // for (let i = 0; i < n; i++) {
    //     html += readLine();
    // }
    // let match;
    // while ((match = re.exec(html)) !== null) {
    //     results.push(match[1] + ',' + match[2].trim());
    // }
    // for(let i = 0; i < results.length; i++) {
    //     console.log(results[i]);
    // }



    
}