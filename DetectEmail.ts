function processData(input) {
    console.log([...new Set(input.match(/([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+/gm).sort())].join(';' ))
   } 
   
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});