// MAP
const map = new Map();
map.set("A", 1); // set value
map.has("A"); // check whether an entry with the key is present
map.get("A"); // get value
map.size; // get size
map.values(); // get an iterator for values
// loop values
for (const value of map.values()) {
  console.log(value);
}
map.keys(); // get an iterator for keys
// loop keys
for (const key of map.keys()) {
  console.log(key);
}
map.entries(); // get an iterator for keys and values together
// loop keys and values
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
// another way to loop keys and values
map.forEach((value, key) => console.log(key, value));
map.delete("A"); // to delete an entry using key

// SET
const set = new Set();
set.add(1); // adds a value
set.has(1); // check whether a value is present
set.size; // get size
set.values(); // get an iterator for values
// loop values
for (const value of set.values()) {
  console.log(value);
}
set.keys(); // get an iterator for keys
// loop keys
// NOTE: In set both keys and values are same
for (const key of set.keys()) {
  console.log(key);
}
set.entries(); // get an iterator for keys and values together
// loop keys and values
// NOTE: In set both keys and values are same
for (const [key, value] of set.entries()) {
  console.log(key, value);
}
// another way to loop keys and values
set.forEach((value, key) => console.log(key, value));
set.delete(1); // to delete an entry using value

// ARRAY
const array = [1, 2, 3];
const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
];
array.length; // get size
array.includes(1); // checks if values is present from index 0
array.includes(2, 1); // checks if values is present from index 1
array.indexOf(1); // gets the index of value if it is present or -1 from index 0
array.indexOf(1, 1); // gets the index of value if it is present or -1 from index 1
array.lastIndexOf(1); // gets the last index of value if it is present or -1 from index 0
array.lastIndexOf(1, 1); // gets the last index of value if it is present or -1 from index 1
array.join(","); // [1,2,3] -> "1,2,3"
array.reverse().reverse(); // [1,2,3] -> [3,2,1] -> [1,2,3] in place
twoDArray.flat(); // [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6]

const newArray = array.concat(4); // newArray = [1,2,3] <- 4 => [1,2,3,4]
array.push(4); // array = [1,2,3] <- 4 => [1,2,3,4]
console.log(array.pop()); // [1,2,3,4] -> 4
array.unshift(4); // array = 4 -> [1,2,3] => [4,1,2,3]
console.log(array.shift()); // 4 <- [4,1,2,3]

array.map((e, i, a) => e * 2); // [1,2,3] -> [2,4,6]
array.filter((e, i, a) => e % 2 === 0); // [1,2,3] -> [2]
array.reduce((ac, c, i, a) => a + c, 0); // [1,2,3] -> 6
array.every((e, i, a) => e > 0); // [1,2,3] -> true - when all are true
array.some((e, i, a) => e % 2); // [1,2,3] -> true - when any one is true
array.reduceRight((ac, c, i, a) => a + c, 0); // 6 <- [1,2,3]
array.forEach((e, i, a) => console.log(e)); // loop through array
array.find((e, i, a) => e % 2 === 0); // [1,2,3] -> 2
array.findIndex((e, i, a) => e % 2 === 0); // [1,2,3] -> 0
array.flatMap((e, i, a) => [e, e * 2]); // [1,2,3] -> [[1,2],[2,4],[3,6]] -> [1,2,2,4,3,6]
// e->array element, i -> index, a -> array, ac -> accumulator, c -> current values

// loop values
for (const value of array.values()) {
  console.log(value);
}
array.keys(); // get an iterator for keys
// loop keys
// NOTE: In array keys will be indexes
for (const key of array.keys()) {
  console.log(key);
}
array.entries(); // get an iterator for keys and values together
// loop keys and values
// NOTE: In array keys will be indexes
for (const [key, value] of array.entries()) {
  console.log(key, value);
}
// another way to loop keys and values
array.forEach((value, key) => console.log(key, value));
array.sort((a, b) => a - b); // [2,1,3] -> [1,2,3] in place and takes a compare function as argument
array.slice(1, 3); // [1,2,3] -> [2,3] new copy
array.splice(1, 3); // [1,2,3] -> [2,3] in place
