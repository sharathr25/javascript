function parentIndex(index) {
  return Math.floor((index - 1) / 2);
}

function leftChildIndex(index) {
  return index * 2 + 1;
}

function rightChildIndex(index) {
  return index * 2 + 2;
}

function burnAllNodes(startNode, nodes) {
  const startIndex = nodes.indexOf(startNode);

  function dfs(nodeIndex, time) {
    if (nodes[nodeIndex] === -1 || !nodes[nodeIndex]) return time;

    nodes[nodeIndex] = -1;

    return Math.max(
      dfs(parentIndex(nodeIndex), time + 1),
      dfs(leftChildIndex(nodeIndex), time + 1),
      dfs(rightChildIndex(nodeIndex), time + 1)
    );
  }

  return dfs(startIndex, 0);
}

console.log(burnAllNodes(6, [1, 2, -1, 3, -1, -1, 4, 5, -1, -1, 6, -1, -1]));
