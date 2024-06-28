const BinarySearchTreeNode = require("../../../data-structures/binarySearchTree/BinarySearchTreeNode");
const { leafSimilar } = require("./code");

describe("Leaf-Similar Trees", () => {
  test("Test case 1", () => {
    const a = new BinarySearchTreeNode(3);
    const b = new BinarySearchTreeNode(5);
    const c = new BinarySearchTreeNode(1);
    const d = new BinarySearchTreeNode(6);
    const e = new BinarySearchTreeNode(2);
    const f = new BinarySearchTreeNode(9);
    const g = new BinarySearchTreeNode(8);
    const h = new BinarySearchTreeNode(7);
    const i = new BinarySearchTreeNode(4);

    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    e.left = h;
    e.right = i;

    const j = new BinarySearchTreeNode(3);
    const k = new BinarySearchTreeNode(5);
    const l = new BinarySearchTreeNode(1);
    const m = new BinarySearchTreeNode(6);
    const n = new BinarySearchTreeNode(2);
    const o = new BinarySearchTreeNode(9);
    const p = new BinarySearchTreeNode(8);
    const q = new BinarySearchTreeNode(7);
    const r = new BinarySearchTreeNode(4);

    j.left = k;
    j.right = l;
    k.left = m;
    k.right = q;
    l.left = r;
    l.right = n;
    n.left = o;
    n.right = p;

    expect(leafSimilar(a, j)).toBeTruthy();
  });
});
