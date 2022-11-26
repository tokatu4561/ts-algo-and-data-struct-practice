// 計算量 平均  best O(n logn) worst O(n^2) insertionソートの改良
export const shellSort = (nums: Array<number>): Array<number>  => {
  const len = nums.length
  const sortNums = nums
  let gap = Math.floor(len / 2)

  while(gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = sortNums[i]

      let j = i
      while (j >= gap && sortNums[j - gap] > temp) {
        sortNums[j] = sortNums[j - gap]
        j -= gap
      }
      sortNums[j] = temp
    }

    gap = Math.floor(gap / 2)
  }

  return sortNums
}