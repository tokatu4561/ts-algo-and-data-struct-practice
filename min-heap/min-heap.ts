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

export class MiniHeap {
    public heap: Array<number>
    public currentSize: number

    constructor() {
        this.heap = [-10000] // 初期に最小の値として入れておく 仮で-10000
        this.currentSize = 0
    }

    public parent_index(index: number) : number {
        return index / 2
    }

    public left_child_index(index: number) : number {
        return index * 2
    }

    public right_child_index(index: number) : number {
        return index * 2 + 1
    }

    public swap (index: number, index2: number): void {
        [this.heap[index], this.heap[index2]] = [this.heap[index2], this.heap[index]]
    }

    private min_child_index (index: number): number {
        if (this.right_child_index(index) > this.currentSize) {
            // 右側にノードがない状態　一番右にあるノードがmaxsizeになってる
            return this.left_child_index(index)
        } else {
            // 右にノードがある場合 右と左で小さい方を返す
            if (this.heap[this.left_child_index(index)] < this.heap[this.right_child_index(index)]) {
                return this.left_child_index(index)
            } else {
                return this.right_child_index(index)
            }
        }
    }

    public heapify_up(index: number) {
        while (this.parent_index(index) > 0) {
            if (this.heap[index] < this.heap[this.heap[this.parent_index(index)]]) {
                this.swap(index, this.parent_index(index))
            }
        }
    }

    public heapify_down(index: number) {
        while (this.left_child_index(index) <= this.currentSize) {
            const minChiledIdx = this.min_child_index(index)
            if (this.heap[index] > this.heap[minChiledIdx]) this.swap(index, minChiledIdx)
            index = minChiledIdx
        }
    }

    public push(value: number) :void {
        this.heap.push(value)
        this.currentSize++
        this.heapify_up(this.currentSize)
    }

    public pop() : number | void {
        if (this.currentSize == 0) return

        let root = this.heap[1]
        let last = this.heap.pop()

        if (this.heap.length == 1) return root

        this.heap[1] = last!

        this.heapify_down(1)

        return root
    }
}