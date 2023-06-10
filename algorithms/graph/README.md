#graph = nodes + edges

## Directed graph
a -> c
|    |
v    v
b <- e
|
v
d <- f

Represented as adjecency list
{
    a: [ b, c ],
    b: [ d ],
    c: [ e ],
    d: [ ],
    e: [ b ],
    f: [ d ]
}

----
## undirected graph
a - c
|
b - e
|
d - f

Represented as edge list
[
    [ a, c ],
    [ a, b ],
    [ b, e ],
    [ d, f ]
]

## Traversal
a -> c
|    |
v    v
b <- e
|
v
d <- f

### DFS
a,b,d,c,e,f
Go all the way to dead end, ex: when we goto 'b' goto its child 'd' 
we can use stack for this

### BFS
a,b,c,d,e,f
Go to all the children, ex: visit all the childs 'a' first i.e, 'b', 'c'
we can use queue for this
