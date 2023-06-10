// return true if there is a path in the acyclic graph from source to destination or false if there is none
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

// using dfs
const hasPath = (graph, source, destination) => {
  if (source === destination) return true

  for (const neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination)) {
      return true
    }
  }

  return false
}

// using bfs
const hasPathbfs = (graph, source, destination) => {
  const queue = [source]

  while (queue.length) {
    const current = queue.shift()

    if (current === destination) return true

    for (const neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }

  return false
}

console.log(hasPath(graph, 'f', 'k')) // true
console.log(hasPath(graph, 'f', 'j')) // false
console.log('====')
console.log(hasPathbfs(graph, 'f', 'k')) // true
console.log(hasPathbfs(graph, 'f', 'j')) // false
