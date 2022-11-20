export interface Iterater<T> {
  // Iterater は 集約体 (Aggregate)に次の要素が存在するかしないかと、次の要素を返す
  next(): T;
  hasNext(): boolean;
}

export interface Aggregate<T> {
  createIterater(): Iterater<T>;
}
