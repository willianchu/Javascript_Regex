var Regex_Pattern = /^...\....\....\....$/g; //that starts and ends

function processData(Test_String) {
    var matches = Test_String.match(Regex_Pattern);
    var match = matches != null && matches.length > 0;
    console.log(matches);
    console.log(match);
} 

processData("123.456.abc.def"); // true
processData("1123.456.abc.def"); // false