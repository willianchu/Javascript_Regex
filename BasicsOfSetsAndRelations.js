// function unionOfSets(setA, setB) {
//   let union = new Set(setA);
//   for (let elem of setB) {
//     union.add(elem);
//   }
//   return union.size;
// }

const A = new Set([1, 2, 3, 4, 5, 6]);
const B = new Set([2, 3, 4, 5, 6, 7, 8]);

// refactor
// Union A ∪ B
const union = new Set([...A, ...B]);
console.log(union.size); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection A ∩ B
const intersection = new Set([...A].filter(x => B.has(x)));
console.log(intersection.size); // Set { 2, 3, 4, 5, 6 }