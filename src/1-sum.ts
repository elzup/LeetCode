function twoSum(nums: number[], target: number): number[] {
  const obj: Record<number, number> = {}
  nums.forEach((n, i) => (obj[n] = i))
  for (const [i, n] of Object.entries(nums)) {
    const k = obj[target - n]
    const ni = Number(i)

    if (k && k !== ni) return [ni, k]
  }
  return []
}

console.log(twoSum([3, 3], 6))
