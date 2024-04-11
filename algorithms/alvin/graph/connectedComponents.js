// get number of connected components i.e sub graphs in a graph
// there may be cycles

// we have 3 components in the below graph
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
  if (visited.has(src)) return false

  visited.add(src)
  for (const neightbor of graph[src]) {
    explore(graph, neightbor, visited)
  }

  return true
}

const connectedComponentCount = graph => {
  const visited = new Set()
  let count = 0
  for (const node in graph) {
    if (explore(graph, node, visited)) {
      count++
    }
  }
  return count
}

console.log(connectedComponentCount(graph)) // 3
