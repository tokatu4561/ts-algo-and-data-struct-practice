// 計算量 平均 O(n^2) best O(n) worst O(n^2) bubleソートに類似
export const gnomeSort = (nums: Array<number>): Array<number>  => {
  const len = nums.length
  const sortNums = nums

  let index = 0

  while (index < len) {
    if (index == 0) index += 1
    if (sortNums[index] >= sortNums[index - 1]) {
      index += 1
    } else {
      [sortNums[index], sortNums[index - 1]] = [sortNums[index - 1], sortNums[index]]
      index -= 1
    }
  }

  return sortNums
}