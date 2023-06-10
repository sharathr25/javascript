// get the shortest path between source and destination
// we can solve this by DFS or BFS
// But, BFS will be good. Because DFS we will travel all the way to dead end
// If we don't get destination in this path before we hit dead end
// the above traversal will be useless
// In BFS, we travel all the children level by level, we will hit destination sooner

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

const buildGraph = edges =>
  edges.reduce((acc, cur) => {
    const [a, b] = cur

    if (!(a in acc)) acc[a] = []
    if (!(b in acc)) acc[b] = []

    acc[a].push(b)
    acc[b].push(a)

    return acc
  }, {})

const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges)
  const queue = [[src, 0]]
  const visited = new Set([src])

  while (queue.length) {
    const [node, distance] = queue.shift()

    if (node === dst) return distance

    for (const current of graph[node]) {
      if (!visited.has(current)) {
        visited.add(current)
        queue.push([current, distance + 1])
      }
    }
  }

  return -1
}

console.log(shortestPath(edges, 'w', 'z')) // 2
