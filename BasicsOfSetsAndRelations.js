function unionOfSets(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union.size;
}

const A = new Set([1, 2, 3, 4, 5, 6, 6]);
const B = new Set([2, 3, 4, 5, 6, 7, 8]);

console.log(unionOfSets(A, B)); // answer is 8