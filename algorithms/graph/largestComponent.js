// get number of connected components i.e sub graphs in a graph
// there may be cycles

// we have 3 components in the below graph and largest component has 4 nodes
/*
    1 - 2

        4
        |
    5 - 6 - 8
        |
        7

    3    
 */
const graph = {
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}

const explore = (graph, src, visited) => {
  if (visited.has(src)) return 0

  visited.add(src)

  let size = 1

  for (const neightbor of graph[src]) {
    size += explore(graph, neightbor, visited)
  }

  return size
}

const largestComponent = graph => {
  const visited = new Set()
  let longest = 0
  for (const node in graph) {
    const size = explore(graph, node, visited)
    if (size > longest) longest = size
  }
  return longest
}

console.log(largestComponent(graph)) // 4
