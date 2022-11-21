// 計算量 平均 O(n^2) best O(n) worst O(n^2) バブルソートより速い
export const cocktailSort = (nums: Array<number>): Array<number>  => {
  const sortNums = nums
  let start = 0
  let end = nums.length - 1
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = start; i <  end; i++) {
      if (sortNums[i] > sortNums[i+1]) {
        [sortNums[i], sortNums[i+1]] = [sortNums[i+1], sortNums[i]]
        swapped = true
      }
    }
    
    if(!swapped) break

    swapped = false
    end -= 1

    for (let i = end; i > start; i--) {
      if (sortNums[i] < sortNums[i-1]) [sortNums[i], sortNums[i-1]] = [sortNums[i-1], sortNums[i]]
      swapped = true
    }

    start += 1
  }
  
  return sortNums
}