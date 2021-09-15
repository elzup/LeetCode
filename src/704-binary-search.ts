function search(nums: number[], target: number): number {
  let s = 0
  let e = nums.length
  while (s < e) {
    const p = Math.floor(s + (e - 1 - s) / 2)
    if (nums[p] === target) return p
    if (nums[p] < target) {
      s = p
    } else {
      e = p
    }
  }
  return -1
}
