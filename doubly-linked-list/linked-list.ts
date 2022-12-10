export class NodeClass {
  public nextNode?: NodeClass
  public prevNode?: NodeClass
  public data: any

  constructor( data: any, nextNode?: NodeClass, prevNode?: NodeClass) {
    this.nextNode = nextNode
    this.prevNode = prevNode
    this.data = data
  }
}

export class DoublyLinkedList {
  private head?: NodeClass

  constructor(head?: NodeClass) {
    this.head = head
  }

  // 末尾に追加
  public append(data: any): void {
    const newNode = new NodeClass(data)
    if (!this.head) {
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    currentNode.nextNode = newNode
    newNode.prevNode = currentNode
  }

  // 先頭に追加
  public insert (data: any):void {
    const newNode = new NodeClass(data)
    if (!this.head) {
      this.head = newNode
      return
    }

    this.head.prevNode = newNode
    newNode.nextNode = this.head
    this.head = newNode
  }

  // データを削除
  public remove (data: any): void {
    let currentNode = this.head

    if (currentNode && currentNode.data == data) {
      if (currentNode.nextNode == undefined) {
        currentNode = undefined
        this.head = undefined
        return
      } else {
        let next = currentNode.nextNode
        next.prevNode = undefined
        currentNode = undefined
        this.head = next
        return
      }
    }

    while (currentNode && currentNode.data != data) {
      currentNode = currentNode.nextNode
    }

    // 最後まで削除対象のデータがない
    if (!currentNode) {
      return
    }

    if (currentNode.nextNode == undefined) {
      // 最後のデータが削除対象のデータ
      let prev = currentNode.prevNode
      prev!.nextNode = undefined
      currentNode = undefined
      return
    } else {
      const prev = currentNode.prevNode
      const next = currentNode.nextNode
      prev!.nextNode = next
      next.prevNode = prev
      currentNode = undefined
      return
    } 
  }

  public print (): void {
    let currentNode = this.head

    while (currentNode) {
      console.log(currentNode.data)
      currentNode = currentNode.nextNode
    }
  }

  // 逆順にソートする
  public reverse_iterative(): void {
    let prevNode
    let currentNode = this.head
    while (currentNode) {
      prevNode = currentNode.prevNode

      currentNode.prevNode = currentNode.nextNode
      currentNode.nextNode = prevNode

      currentNode = currentNode.prevNode
    }

    if (prevNode) {
      this.head = prevNode.prevNode
    }
  }

  // 逆順に再帰的にソートする
  public reverse_recursive(): void {
    this.head = this._reverse_recursive(this.head)
  }

  private _reverse_recursive(currentNode: NodeClass | undefined): NodeClass | undefined {
    if (!currentNode) return undefined

    let prevNode
    prevNode = currentNode.prevNode
    currentNode.prevNode = currentNode.nextNode
    currentNode.nextNode = prevNode

    if (currentNode.prevNode == undefined) currentNode

    this._reverse_recursive(currentNode.prevNode)
  }
}