function processData(input) {
    let re = /(?<=https?:\/\/)[\w.\-]+(\.[a-z]+)/gui;
    
    let domainsWithWW = input.match(re);
    let domains = domainsWithWW.map((el)=>el.replace(/(^(www.))|(^(ww3.))/, ''));
    console.log([...new Set(domains)].sort().join(';'));
}

// var Regex_Pattern = /(?:www.)\w+\.\w+\w*/

// function processData(input) {
//     console.log(!!Test_String.match(Regex_Pattern))
// } 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });