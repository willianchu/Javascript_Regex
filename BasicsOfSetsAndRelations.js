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

// in sql
// SELECT * FROM A UNION SELECT * FROM B;


// Intersection A ∩ B
const intersection = new Set([...A].filter(x => B.has(x)));
console.log(intersection.size); // Set { 2, 3, 4, 5, 6 }
// in sql
// SELECT * FROM A INTERSECT SELECT * FROM B;


// Difference A - B
const difference = new Set([...A].filter(x => !B.has(x)));
console.log(difference.size); // Set { 1 }
// in sql
// SELECT * FROM A EXCEPT SELECT * FROM B;


// Cartesian Product A × B
let add2new = new Set();
for(let a of A) {
  for(let b of B) {
    add2new.add({a, b});
  }
}
console.log(add2new.size); 
// in sql
// SELECT * FROM A CROSS JOIN B;


// Refactor Cartesian Product A × B
const cartesianProduct = new Set([...A].map(a => [...B].map(b => [a, b])).flat());
// flat is used to return a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(cartesianProduct.size);