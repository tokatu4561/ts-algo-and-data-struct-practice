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

export const remove = (node: Node | undefined, value: number): Node | undefined => {
    if (!node) return node

    if (value < node.value) {
        node.left = remove(node.left, value)
    } else if (value > node.value) {
        node.right = remove(node.right, value)
    } else {
        if (node.left == undefined) {
            return node.right
        } else if (node.right == undefined) {
            return node.left
        } 

        let tmp = _minNode(node.right)
        node.value = tmp.value
        node.right = remove(node.right, tmp.value)
    }

    return node
}

const _minNode = (node: Node) : Node=> {
    let current = node

    while(node.left) {
        current = node.left
    }

    return current
}