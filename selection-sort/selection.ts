// 計算量 平均 O(n^2) best O(n^2) worst O(n^2) bubleソートの改良
export const selectionSort = (nums: Array<number>): Array<number>  => {
  const len = nums.length
  const sortNums = nums
  console.log(sortNums)

  for (let i = 0; i < len; i++) {
    let minIdx = i
    for (let j = i + 1; j < len; j++) {
      if (sortNums[minIdx] > sortNums[j]) {
        minIdx = j
      }
    }
    [sortNums[minIdx], sortNums[i]] = [sortNums[i], sortNums[minIdx]]
  }

  return sortNums
}