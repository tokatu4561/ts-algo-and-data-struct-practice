
// 計算量 平均 O(n^2) best O(n) worst O(n^2)
const bubbleSort = (nums: Array<number>): Array<number>  => {
  const len = nums.length
  const sortNums = nums

  for (let i = 0; i < len; i++) {
    for (let j = 0; i < len - 1 - i; j++) {
      if (sortNums[j] > sortNums[j+1]) [sortNums[j], sortNums[j+1]] = [sortNums[j+1], sortNums[j]]
    }
  }

  return sortNums
}


const nums = [1, 5, 6, 7, 8]
const sortedNums = bubbleSort(nums)

console.log(sortedNums)