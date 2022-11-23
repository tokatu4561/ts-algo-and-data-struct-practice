// 計算量 平均 O(n^2) best O(n) worst O(n^2)
export const insertionSort = (nums: Array<number>): Array<number>  => {
  const len = nums.length
  const sortNums = nums

  for (let i = 1; i < len; i++) {
    let tmp = sortNums[i]
    let j = i - 1
    while(j >= 0 && sortNums[j] > tmp) {
      sortNums[j + 1] = sortNums[j]
      j -= 1
    }
    sortNums[j + 1] = tmp
  }

  return sortNums
}