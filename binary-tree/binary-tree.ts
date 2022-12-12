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

export class BinarySearchTree {
    public root: Node | undefined
    constructor() {
        this.root = undefined
    }

    public insert = (value: number): void=> {
        this._insert(this.root, value)
    }

    private _insert = (node: Node | undefined, value: number): Node => {
        if (!node) return new Node(value)
    
        if (value < node.value) {
            node.left = this._insert(node.left, value)
        } else {
            node.right = this._insert(node.right, value)
        }
    
        return node
    }

    public inorder = (): void => {
        this._inorder(this.root)
    }

    private _inorder = (node: Node | undefined): void => {
        if (node) {
            this._inorder(node.left)
            console.log(node.value)
            this._inorder(node.right)
        }
    }

    // 検索
    public search = (value: number): boolean => {
        return this._search(this.root, value)
    }

    private _search = (node: Node | undefined, value: number): boolean => {
        if (!node) return false
    
        if (node.value > value) {
            return this._search(node.left, value)
        } else if (node.value < value) {
            return this._search(node.right, value)
        } 
    
        return true
    }

    // 削除
    public remove = (value: number): void => {
       this._remove(this.root, value)
    }

    private _remove = (node: Node | undefined, value: number): Node | undefined => {
        if (!node) return node
    
        if (value < node.value) {
            node.left = this._remove(node.left, value)
        } else if (value > node.value) {
            node.right = this._remove(node.right, value)
        } else {
            if (node.left == undefined) {
                return node.right
            } else if (node.right == undefined) {
                return node.left
            } 
    
            let tmp = this.minNode(node.right)
            node.value = tmp.value
            node.right = this._remove(node.right, tmp.value)
        }
    
        return node
    }

    private minNode = (node: Node) : Node=> {
        let current = node
    
        while(node.left) {
            current = node.left
        }
    
        return current
    }

}