var Regex_Pattern = /__________/; //Do not delete '/'. Replace __________ with your regex.

// Task

// Given a test string,s , write a RegEx that matches s under the following conditions:

// s must start with Mr., Mrs., Ms., Dr. or Er..
// The rest of the string must contain only one or more English alphabetic letters (upper and lowercase).

Regex_Pattern = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]+$/;

// $ is the end of the string
// + is one or more
// \. is a period
// ^ is the beginning of the string