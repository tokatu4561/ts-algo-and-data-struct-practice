// ２分木

// ノード
export class Node {
    public value: number
    public left: Node | undefined
    public right: Node | undefined
  
    constructor(value: number) {
      this.value = value
    }
  
}

export const insert = (node: Node | undefined, value: number): Node => {
    if (!node) return new Node(value)

    if (value < node.value) {
        node.left = insert(node.left, value)
    } else {
        node.right = insert(node.right, value)
    }

    return node
}