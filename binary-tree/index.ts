import { BinarySearchTree } from "./binary-tree";

const tree = new BinarySearchTree()
tree.insert(3)
tree.insert(6)
tree.insert(5)
tree.insert(7)
tree.insert(1)
tree.insert(10)
tree.insert(2)
tree.inorder()
console.log(tree.search(6)) // true
console.log(tree.search(12)) // false
tree.remove(6)
tree.inorder()