var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// You have a test S string .
// Your task is to write a regex which will match S, with following condition(s):

//  S consists of 8 digits.
//  S may have "-" separator such that string S gets divided in 4 parts, with each part having exactly two digits. (Eg. 12-34-56-78)
// using backreference 

// Valid S

// 12345678
// 12-34-56-87

// Invalid S

// 1-234-56-78
// 12-45-7810

Regex_Pattern = /^(\d\d)(?=-\1-\1-\1$)/; 

