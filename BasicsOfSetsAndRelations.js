function unionOfSets(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union.size;
}

let A = {1,2,3,4,5,6}
let B = {2,3,4,5,6,7,8}

console.log(unionOfSets(A, B));