### LRU cache
> LRU -> **L**east **R**ecently **U**sed

* Cache is nothing but storing frequently requested data in RAM so that we dont have to query DB to get the data. 
* But there is one problem, RAM is finite so cache is also finite even if we give full RAM(Ideally we will not give full RAM).
* To fix this problem the only way is we need to delete some data in cache, But the question is which data should we delete in order make room for new data.
* We use this LRU technique(we have so many other techiques as well) to handle this kind of problem.

Lets consider our cache as below which has 3 bytes of space, And we can assume the data what we store is always 1 byte for simplicity.
```
+-------+-------+------+
|       |       |      |
|       |       |      |
+-------+-------+------+
```
when we read A, B and C data from DB and we will insert in this cache so that next time we can give data from this cache instead of DB.
```
+-------+-------+------+
|  A    |   B   |   C  |
|       |       |      |
+-------+-------+------+
```
when someone asks data A we can serve them from this cache, and we can move this data to the front
```
+-------+-------+------+
|  B    |   C   |   A  |
|       |       |      |
+-------+-------+------+
```
when someone asks data B we can serve them from this cache, and we can do the same as above
```
+-------+-------+------+
|  C    |   A   |   B  |
|       |       |      |
+-------+-------+------+
```
someone requested data D which is not in the cache.
In this case we need to fetch data D from DB after that we need to strore this data in cache.

Since cache is already full, We need to delete something.
we need to delete that data wihch is not requested recenlty.

since when someone requests data and it is in cache we serve them and move it to the front, We can consider whatever in the end is not recently requested and we can replace them with new data. In our case we replace data C with data D.
```
+-------+-------+------+
|  D    |   A   |   B  |
|       |       |      |
+-------+-------+------+
```

The mechanism is 
* When requested data is in the cache after serving it back move it to the front.
* When the cache is full to make room for new data delete the rear end data to make space for the new data that we need to store in cache.