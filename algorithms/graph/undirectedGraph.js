// return true if there is a path from source to destination or false if there is none
// This is undirected graph, So there may be cycles

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

// we need to create an adjecncy list which works best for traversal
const buildGraph = edges =>
  edges.reduce((acc, cur) => {
    const [a, b] = cur
    if (!(a in acc)) acc[a] = []
    if (!(b in acc)) acc[b] = []
    acc[a].push(b)
    acc[b].push(a)
    return acc
  }, {})

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  if (visited.has(src)) return false

  visited.add(src)
  for (const current of graph[src]) {
    if (hasPath(graph, current, dst, visited)) {
      return true
    }
  }

  return false
}

const undirectedPath = (edges, src, dst) => {
  const visited = new Set()
  const graph = buildGraph(edges)
  return hasPath(graph, src, dst, visited)
}

console.log(undirectedPath(edges, 'i', 'm')) // true
