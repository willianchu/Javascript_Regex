var Regex_Pattern = /\d{2}\D\d{2}\D\d{4}/; //Do not delete '/'. Replace __________ with your regex.
// \d{2}\D\d{2}\D\d{4}
// \d\d\D\d\d\D\d\d\d\d

function processData(Test_String) {
       
    console.log(!!Test_String.match(Regex_Pattern));
} 

processData("06-11-2015");
