function processData(input) {
  console.log([...new Set(input.match(/([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+/gm).sort())].join(';' ))
 } 
 
//  function processData(input) {
//   //Enter your code here
//   let exp = /[A-Za-z\d_\.]*?@[A-Za-z\d_]+(\.[A-Za-z\d_\-\{\}]+)+/g;
//   console.log([...new Set(input.match(exp)?.sort())].join(';'));
// } 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
 _input += input;
});

process.stdin.on("end", function () {
processData(_input);
});