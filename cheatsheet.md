# Map

## create

```javascript
const map = new Map();
```

## set value

```javascript
map.set("A", 1);
```

## get value

```javascript
map.get("A");
```

## get size

```javascript
map.size;
```

## check whether an entry with the key is present

```javascript
map.has("A");
```

## get an iterator for values and loop values

```javascript
for (const value of map.values()) {
  console.log(value);
}
```

## get an iterator for keys and loop keys

```javascript
for (const key of map.keys()) {
  console.log(key);
}
```

## get an iterator for entries and loop entries

```javascript
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
```

## another way to loop keys and values

```javascript
map.forEach((value, key) => console.log(key, value));
```

## to delete an entry using key

```javascript
map.delete("A");
```

# Set

## Create

```javascript
const set = new Set();
```

## adds a value

```javascript
set.add(1);
```

## check whether a value is present

```javascript
set.has(1);
```

## get size

```javascript
set.size;
```

## get an iterator for values and loop values

```javascript
for (const value of set.values()) {
  console.log(value);
}
```

## get an iterator for keys and loop keys

**NOTE: In set both keys and values are same**

```javascript
for (const key of set.keys()) {
  console.log(key);
}
```

## get an iterator for keys and values together and loop keys and values

**NOTE: In set both keys and values are same**

```javascript
for (const [key, value] of set.entries()) {
  console.log(key, value);
}
```

## another way to loop keys and values

```javascript
set.forEach((value, key) => console.log(key, value));
```

## to delete an entry using value

```javascript
set.delete(1);
```

# Array

## create

```javascript
const array = [1, 2, 3];
const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
];
```

## get size

```javascript
array.length;
```

## checks if values is present from index 0

```javascript
array.includes(1);
```

## checks if values is present from an index

```javascript
array.includes(2, 1);
```

## gets the index of value if it is present or -1 from index 0

```javascript
array.indexOf(1);
```

## gets the index of value if it is present or -1 from index 1

```javascript
array.indexOf(1, 1);
```

## gets the last index of value if it is present or -1 from index 0

```javascript
array.lastIndexOf(1);
```

## gets the last index of value if it is present or -1 from index 1

```javascript
array.lastIndexOf(1, 1);
```

## join array items with a delimiter and get string

ex: [1,2,3] -> "1,2,3"

```javascript
array.join(",");
```

## reverse

ex: [1,2,3] -> [3,2,1]
**NOTE: this will mutate original array**

```javascript
array.reverse().reverse();
```

## flat 2D array

ex: [[1,2,3],[4,5,6]] -> [1,2,3,4,5,6]

```javascript
twoDArray.flat();
```

## concat an element and get new array with concated element

ex: [1,2,3] <- 4 => [1,2,3,4]

```javascript
const newArray = array.concat(4);
```

## push an element to the end of existing array

ex: [1,2,3] <- 4 => [1,2,3,4]

```javascript
array.push(4);
```

## pop an element from end of exisiting array

ex: [1,2,3,4] -> 4

```javascript
array.pop();
```

## push an element to the front of existing array

ex: 4 -> [1,2,3] => [4,1,2,3]

```javascript
array.unshift(4);
```

## pop an element from end of exisiting array

ex: 4 <- [4,1,2,3]

```javascript
array.shift();
```

## map

ex: [1,2,3] -> [2,4,6]

```javascript
array.map((e, i, a) => e * 2);
```

## filter

ex: [1,2,3] -> [2]

```javascript
array.filter((e, i, a) => e % 2 === 0);
```

## reduce

ex: [1,2,3] -> 6

```javascript
array.reduce((ac, c, i, a) => a + c, 0);
```

## every - to check every element satisfies our condition

ex: [1,2,3] -> true - when all are true

```javascript
array.every((e, i, a) => e > 0);
```

## every - to check any element satisfies our condition

ex: [1,2,3] -> true - when any one is true

```javascript
array.some((e, i, a) => e % 2);
```

## reduce from end to front

ex: 6 <- [1,2,3]

```javascript
array.reduceRight((ac, c, i, a) => a + c, 0);
```

## find the 1st element which satisfies our condition

ex: [1,2,3] -> 2

```javascript
array.find((e, i, a) => e % 2 === 0);
```

## find the index of the 1st element which satisfies our condition

ex: [1,2,3] -> 0

```javascript
array.findIndex((e, i, a) => e % 2 === 0);
```

## map to an 2D array and flat it

ex: [1,2,3] -> [[1,2],[2,4],[3,6]] -> [1,2,2,4,3,6]

```javascript
array.flatMap((e, i, a) => [e, e * 2]);
```

## loop through array

### way 1

```javascript
array.forEach((e, i, a) => console.log(e));
```

### way 2

```javascript
for (const value of array.values()) {
  console.log(value);
}
```

## get an iterator for keys and loop keys

**NOTE: In array keys will be indexes**

```javascript
for (const key of array.keys()) {
  console.log(key);
}
```

## get an iterator for keys and values together and loop keys and values

**NOTE: In array keys will be indexes**

### way 1

```javascript
for (const [key, value] of array.entries()) {
  console.log(key, value);
}
```

### way 2

```javascript
array.forEach((value, key) => console.log(key, value));
```

## sort

ex: [2,1,3] -> [1,2,3]

```javascript
array.sort((a, b) => a - b);
```

## remove elements from index and get new array

ex: [1,2,3] -> [2,3] new copy

```javascript
array.slice(1, 3);
```

## remove elements from index from the original array

ex: [1,2,3] -> [2,3] in place

```javascript
array.splice(1, 3);
```
