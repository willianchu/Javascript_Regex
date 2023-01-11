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
// Sample Input
// 3
// 11011 LUA
// 11022 BRAINFUCK
// 11044 X

// code + language

function main() {
    const n: number = parseInt(readLine().trim(), 10);
    const regex: RegExp = new RegExp('^[1-9][0-9]{4}$');
    for (let i: number = 0; i < n; i++) {
        const input: string = readLine().trim();
        const code: string = input.split(' ')[0];
        const language: string = input.split(' ')[1];
        if (regex.test(code) && languages.includes(language)) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }
    


}

const languages: string[] = [
    'C',
    'CPP',
    'JAVA',
    'PYTHON',
    'PERL',
    'PHP',
    'RUBY',
    'CSHARP',
    'HASKELL',
    'CLOJURE',
    'BASH',
    'SCALA',
    'ERLANG',
    'CLISP',
    'LUA',
    'BRAINFUCK',
    'JAVASCRIPT',
    'GO',
    'D',
    'OCAML',
    'R',
    'PASCAL',
    'SBCL',
    'DART',
    'GROOVY',
    'OBJECTIVEC'
];