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

// extract domain from all full path urls in html
function main() {
    const n = parseInt(readLine().trim(), 10);
    const answer: string[] = [];
    for(let i = 0; i < n; i++){
        const S = readLine();
        const regex = /https?[:]\/\/(?:www.|ww2.)?((?:(?:[-a-z0-9]+[.])+)[-a-z0-9]+)/;
        const result = S.match(regex);
        if(result!=null){
            answer.push(result[1]);
        }
    }
    console.log(answer);
    //console unique values, sorted alphabetically and separated by semicolon
    console.log([...new Set(answer)].sort().join(';'));
}


// my answer
// b.scorecardresearch.com;books.rediff.com;dealhojaye.rediff.com;ia.rediff.com;im.rediff.com;imshopping.rediff.com;imworld.rediff.com;ishare.rediff.com;loc.rediff.com;login.rediff.com;mail.rediff.com;metric.ind.rediff.com;money.rediff.com;mypage.rediff.com;news.rediff.com;pages.rediff.com;realtime.rediff.com;rediff.com;register.rediff.com;shopping.rediff.com;simg.rcdn.in;track.rediff.com;w3.org;zarabol.rediff.com
// correct answer
// b.scorecardresearch.com;books.rediff.com;careers.rediff.com;clients.rediff.com;datastore.rediff.com;datastore01.rediff.com;datastore04.rediff.com;datastore05.rediff.com;dealhojaye.rediff.com;hosting.rediff.com;ia.rediff.com;im.rediff.com;imshopping.rediff.com;imworld.rediff.com;investor.rediff.com;ishare.rediff.com;loc.rediff.com;login.rediff.com;mail.rediff.com;metric.ind.rediff.com;money.rediff.com;mypage.rediff.com;n01.rcdn.in;news.rediff.com;pages.rediff.com;realtime.rediff.com;rediff.com;register.rediff.com;search.rediff.com;shopping.rediff.com;simg.rcdn.in;simg03.rcdn.in;track.rediff.com;w3.org;zarabol.rediff.com