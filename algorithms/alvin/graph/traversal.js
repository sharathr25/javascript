const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const bfs = (graph, source) => {
  const queue = [source]

  while (queue.length) {
    const current = queue.shift()
    console.log(current)

    for (const neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

const dfs = (graph, source) => {
  const stack = [source]

  while (stack.length) {
    const current = stack.pop()
    console.log(current)

    for (const neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

// since we are using stack, we can use recursion to use call stack
const dfsr = (graph, source) => {
  console.log(source)

  for (const neighbor of graph[source]) {
    dfsr(graph, neighbor)
  }
}

dfs(graph, 'a')
console.log('========')
dfsr(graph, 'a')
console.log('========')
bfs(graph, 'a')
