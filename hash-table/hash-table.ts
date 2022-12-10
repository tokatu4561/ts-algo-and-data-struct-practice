export class HashTable {
  private size: number;
  private data: Array<Array<any>> = [];

  constructor(size: number) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.data.push([])
    }
  }

  hash(value: string): number {
    const sum = value
      .split("")
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);

    return sum % this.size;
  }

  insert(key: string, value: string): void {
    const index = this.hash(value);

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) this.data[index][i][1] = value
      break
    }

    this.data[index].push([key, value]);
  }

  get(key: string): string | null {
    const index = this.hash(key);

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i] === key) return this.data[index][i][1]
    }

    return null;
  }
}