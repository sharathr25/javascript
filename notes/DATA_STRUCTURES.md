# Non-Linear Data structures(Trees)
Tree is a data structure which stores data in an hierarchy

Tress used in so many places like,
* Represent hierachical data(family, folders, organisation)
* Databases(for indexing)
* Compilers(Syntax tree)
* Auto completion
* Compression(JPEG, MP3)

```
        1 -> node
        / or \ -> edge

            1      --> root node
           / \
          2   3
         / \ / \ 
        4  5 6  7  --> Leaf nodes
``` 
-------
### Binary tree
```
            1      
           / \
          2   3
         / \ / \ 
        4  5 6  7  

        childs <= 2
```
### Binary search tree
```
            7     
           / \
          4   9
         / \ / \ 
        1  6 8 10 

        childs <= 2
        left_node < every_node < right_node
```
#### BFS(Breadth First Search) or level order traversal
visit all the nodes in **current level** before visiting **next level**.
```
      ->    7     
           / \
      ->  4   9
         / \ / \ 
      ->1  6 8 10 
```

#### DFS(Depth First Search)
In this we have 3 sub types
* Pre-Order - **Root** -> Left -> Right
* In-Order -  Left -> **Root** -> Right
* Post-Order - Left -> Right -> **Root**

***This is very important, In order to solve problems on trees we need to first figure out which type of traversal we should use.***

```
            7     
           / \
          4   9
         / \ / \ 
        1  6 8 10

      Pre-Order -> 7,4,6,9,8,10
      In-Order(Left -> Root -> Right) -> 1,4,6,7,8,9,10 (acending order)
      In-Order(Right -> Root -> Left) -> 10,9,8,7,6,4,1 (decending order)
      Post-Order -> 1,6,4,8,9,10,7
```

#### Depth and Height of a tree
depth(d) = No of edges from root the node 
ex: d(6) = 2

height(h) = **max**(No of edges from leaf node_1, No of edges from leaf node_2 ..., No of edges from leaf node_n)
> **h = 1 + max(height_of_left_sub_tree, height_of_right_sub_tree)**
ex: h(7) = 2

NOTE: **height of root node** is also called **height of tree**
```
            7         | d     ^ h
           / \        | e     | e
          4   9       | p     | i
         / \          | t     | g
        1  6          V h     | ht
```
#### Minimum and Maximum of a Binary tree or Binary search tree
If the tree in Binary Search Tree then finding min and max is very simple,
**left leaf node** will be **min** value
**right leaf node** will be **max** value
**O(logn)** time complexity
```
            7     
           / \
          4   9
         / \ / \ 
        1  6 8 10
      (min)   (max)
```
If the tree is just a Binary tree we have to a post order traversal to get minimum of every sub-tree and compare with root node, below is the snippet in java.
**O(n)** time complexity, Because we are checking every node in the tree
```
private int min(Node n) {
        if(n.left == null && n.right == null) return n.value;

        int left = min(n.left);
        int right = min(n.right);

        return Math.min(Math.min(left, right), n.value);
}
```
> ***Search in binary tree takes O(logn) time complexity only if it is balanced or perfect***
#### Perfect Binary Search tree
A tree is perfect if every level except the last level is full of nodes
```
            7     
           / \
          4   9
         / \ / \ 
        1  6 8 10
```
#### Balanced Binary search tree
A tree is balanced if diffrence between height of every left sub tree and right sub tree <=1
```
            7     
           / \
          4   9
         / \ 
        1  6
```
> ***Search in binary tree takes O(n) time complexity if it is not balanced***
#### Left skewed tree
We only have left nodes for every node
```
            7     
           / 
          4   
         / 
        1  
```
#### Right skewed tree
We only have left nodes for every node
```
           7     
            \
             9
              \ 
               10
```
> So to maintain *O(logn)* time complexity we need to keep the tree balanced as we insert or remove nodes.

There are several algorithms to balance a tree when we insert or remove nodes, few of them are:
* AVL trees(Adelson-Velsky and landis)
* Red-Black Trees
* B-trees
* Splay trees
* 2-3 trees

-----------

### AVL Trees
This will automatically re-balance themselves when we insert or remove nodes by ensuring that the **height(left) - height(right) <= 1**, If this is **> 1** then they will use **rotations** to re-balance themseleves.

> ***balance factor = height(left) - height(right)***

We have 4 types of rotations:
1. Left (LL)
2. Right (RR)
3. Left-Right(LR)
4. Right-Left(RL)

#### Left Rotation
```                                                                  
                                                     | 
                                         Right       V
 0(1)2 abs(0 - 2) = 2(un-balanced)       sub-tree    1                
    \                                    is heavy     \            
   0(2)1 abs(0 - 1) = 1                  ------->      2    --->    2
      \                                  Left           \          / \
     0(3)0 abs(0 - 0) = 0                Rotation        3        1   3
```
#### Right Rotation
```                                                                  
                                                         | 
                                          Left           V
    0(3)2 abs(2 - 0) = 2(un-balanced)     sub-tree       3                
      /                                   is heavy      /            
  0(2)1 abs(1 - 0) = 1                    ------->     2    --->    2
    /                                     Right       /            / \
0(1)0 abs(0 - 0) = 0                      Rotation   1            1   3
```
#### Left-Right Rotation
```
                                                                      |
                                                                      V
  2(10)0 abs(2 - 0) = 2(un-balanced)  Left      |  10                10
   /                                  Right     V /    Left         /    Right
0(5)1 abs(0 - 1) = 1                  ------->  5      ------->    7     ------->   7
   \                                  Rotation    \    Rotation   /      Rotation  / \
 (0)7(0) abs(0 - 1) = 0                             7  on 5      5       on 10    5   10
```
#### Right-Left Rotation
```            
                                                               |
                                                               V
0(5)2 abs(0 - 2) = 2(un-balanced)    Right      5   |          5
    \                                Left         \ V  Right    \      Left
   1(10)0 abs(1 - 0) = 1             ------->      10  ------->  7     ------->   7
    /                                Rotation     /    Rotation   \    Rotation  / \
0(7)0  abs(0 - 0) = 0                            7     on 10       10  On 5     5   10
```
#### Detecting rotations
```
10
  \
   20 (-1) balance factor < 0, no need of right rotation
     \
      30 
balance factor of right child is -1 < 0 -> no need of right rotation
this is a right heavy tree -> leftRotate(10)
```
```
    10
      \
       30(1) balance factor > 0, we need right rotation
      /
     20 
balance factor of right child is 1 > 0 -> rightRotate(30)
this is a right heavy tree -> leftRotate(10)
```
```
    30
   /
  20(1) balanceFactor > 0, no need of left rotation
 /
10 
balance factor of left child is 1 > 0 -> no need of right rotation
this is a left heavy tree -> rightRotate(30)   
```
```
   30
  /
 10(-1) balance factor < 0, we need left rotation
   \
    20
balance factor of left child is -1 < 0 -> leftRotate(10)
this is a left heavy tree -> rightRotate(30)  
```
### Heaps
Heap is a complete binary tree, means levels are filled from left to right and every node should be >= children

> Heap property -> every node should be >= children
```
        *
       / \
      *   *    -> Every level is filled, so heap
     / \ / \
     * * * *
     
        *
       / \
      *   *    -> Every level is left to right is filled, so heap
     / \ / \
     * * *
     
        *
       / \
      *   *    -> last level as a hole, so not a heap
     / \ / \
     * *   *

        20
       /  \
     10    15  -> every node >= children and this is complete tree so 
    /  \   /                 this is a heap
   4    5  6
```
#### insertion
insert -> [10, 5, 17, 4, 22]
```
        insert 10 -> 10

        insert 5 ->  10    NOTE: remember we need to fill
                    /             from left to right
                   5   

        insert 17 -> 10
                    /  \
                   5    17

        insert 4 -> 10
                   /  \
                  5    17
                 /
                4

        insert 22 ->  10
                     /  \
                    5    17
                   / \
                  4  22  
        there is a voilation of heap property so bubble up 22 with parent i.e 5 (swap 5,22)

        swap(5,22) -> 10
                     /  \
                    22   17
                   /  \
                  4    5

        still there is a voilation of help property again bubble up 22 with parent i.2 10 (swap 10,22)

        swap(5,22) -> 22
                     /  \
                    10   17
                   /  \
                  4    5

        Now we a heap and all the nodes are inserted
``` 
#### deletion
we can only delete root in a heap
```
        22
       /  \ 
      17   10
     /  \
    4    5

    lets delete 22

        *
       / \
      17  10
     /  \
    4    5

    Now we need to fill root place
    lets place last leaf node 5 in root

        5
       / \
      17  10 -> Voilation of help property, so bubble down 5, 
     /              swap(5, max child i.e 17)
    4   


        17
       / \
      5  10
     /  
    4     

```      
> Insertion sometimes requires bubble up of a node
> deletetion sometimes requires bubble down of a node

#### Heap implementation
Even though arrays are complete binary trees, since they need to filled from left to right we can use arrays.
this helps us to maintain heaps in a memory eficient way.
```
         20 (0)
        /  \
   (1) 10   15 (2)
      /  \  
 (3) 4    5 (4)
```
we may need to bubble up or bubble down in heaps, so we need to know childrens and parents
we can find childrens using below formula
***left = parent * 2 + 1***
***right = parent * 2 + 2***
we can find parent as below
***parent = (index - 1) / 2***