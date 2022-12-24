function processData(input) {
    
    let sections = input.split("\"question-summary\"");
    sections.shift();
        
    const rgx = /\/questions\/(\d+)\/.*\>(.+)<\/a(.|\n)*relativetime">(.+)</i;
        
    sections.forEach((section) => {
       
       let questions = section.match(rgx);
       console.log(questions[1] + ";" + questions[2] + ";" + questions[4]);   
               
    });  
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
