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
Regex_Pattern = /^\d\d(-?)(\d\d\1){2}\d\d$/; // ^\d{2}(-?)\d{2}\1\d{2}\1\d{2}$

Regex_Pattern = /^(\d)(\d)(\-?)(\d)(\d)\3(\d)(\d)\3(\d)(\d)$/; 

Regex_Pattern = /(((\d{2}-){3}\d{2})|(\d{8}))/; 

Regex_Pattern = /^(\d{2}-?){3}\d{2}$/; 

// Backreference to a capturing group that match nothing is different from backreference to a capturing group that did not participate in the match at all.

// Capturing group that match nothing (b?)o\1

// Here, b? is optional and matches nothing.
// Thus, (b?) is successfully matched and capture nothing.
// o is matched with o and \1 successfully matches the nothing captured by the group.

// Capturing group that didn't participate in the match at all

// In most regex flavors (excluding JavaScript), (b)?o\1 fails to match o.
// Here, (b) fails to match at all. Since, the whole group is optional the regex engine does proceed to match o.
// The regex engine now arrives at \1 which references a group that did not participate in the match attempt at all.
// Thus, the backreference fails to match at all.

Regex_Pattern = /