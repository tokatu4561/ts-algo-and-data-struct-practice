import { MiniHeap } from "./min-heap";


const heap = new MiniHeap()
heap.push(5)
heap.push(6)
heap.push(2)
heap.push(9)
heap.push(13)
heap.push(11)
heap.push(1)
console.log(heap.heap)
console.log(heap.pop())
console.log(heap.heap)
