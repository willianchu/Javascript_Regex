var Regex_Pattern = /..\s..\s../; 
// /^\S+\s\S\S\s\S+$/
// \S{2}\s\S{2}\s\S{2}
function processData(Test_String) {
    //Enter your code here
    
    console.log(!!Test_String.match(Regex_Pattern));
} 

processData("AA BB CC");