let text = "Visit Willians Ws";
// Find anything starting with W and ending with s
// g = global match
// .* = any character, any number of times
let pattern = /W.*s/g;
let result = text.match(pattern);

console.log(result);