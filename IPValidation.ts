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
    // Regex to validate IPv4 address
    const ipv4Regex: RegExp = new RegExp(" ^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$ ");
    // Regex to validate IPv6 address
    const ipv6Regex: RegExp = new RegExp(" ^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$ ");
    
    const n: number = parseInt(readLine().trim(), 10);
    
    
    for (let i: number = 0; i < n; i++) {
        // "Neither" is the default output
        let result: string = "Neither";
        
        const ip: string = readLine().trim();
        
        if (ipv4Regex.test(ip)) {
            result = "IPv4";
        } else if (ipv6Regex.test(ip)) {
            result = "IPv6";
        }
        
        console.log(result);
    }
}