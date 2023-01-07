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
    const id: number = parseInt(readLine().trim(), 10);
    
    for(let i: number = 0; i < id; i++) {
        const language: string = readLine().trim();
        if(languages.includes(language)) {
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