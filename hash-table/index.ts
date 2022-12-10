import { HashTable } from "./hash-table";

const hashTable = new HashTable(10)

hashTable.insert('car', 'toyota')
hashTable.insert('car', 'matsuda')
hashTable.insert('pc', 'windows')

console.log(hashTable.get('car'))