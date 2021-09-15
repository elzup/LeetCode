// const isChar = (c: string) => /[a-zA-Z]/.test(c)
const isChar = (c: string) => ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z')
function reverseOnlyLetters(s0: string): string {
  const s = s0.split('')
  let l = 0
  let r = s.length - 1
  while (l < r) {
    while (l < s.length && !isChar(s[l])) l++
    while (0 <= r && !isChar(s[r])) r--
    const lc = s[l]
    const rc = s[r]

    if (l >= r) break
    s[r] = lc
    s[l] = rc
    l++
    r--
  }
  return s.join('')
}

function reverseOnlyLetters0(s: string): string {
  let chars = s.match(/[a-zA-Z]/g)?.reverse() || []
  const symbols = s.matchAll(/[^a-zA-Z]/g)

  for (const { 0: c, index: i } of symbols) chars = insert(chars, i, c)

  return chars.join('')
}

const insert = <T>(a: T[], i: number, v: T) => [
  ...a.slice(0, i),
  v,
  ...a.slice(i),
]
