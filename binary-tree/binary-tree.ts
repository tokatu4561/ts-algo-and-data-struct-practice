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

// 小さい順に表示する
export const inorder = (node: Node | undefined): void => {
    if (node) {
        inorder(node.left)
        console.log(node.value)
        inorder(node.right)
    }
} 

// 検索
export const search = (node: Node | undefined, value: number): boolean => {
    if (!node) return false

    if (node.value > value) {
        return search(node.left, value)
    } else if (node.value < value) {
        return search(node.right, value)
    }

    return true
} 