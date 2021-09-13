class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let node = new ListNode(0)
  let moveUp = 0
  let cur = node

  while (!!l1 || !!l2) {
    let cn = moveUp
    cn += l1?.val ?? 0
    cn += l2?.val ?? 0
    moveUp = cn >= 10 ? 1 : 0
    cur.next = new ListNode(cn % 10)
    cur = cur.next

    l1 = l1?.next || null
    l2 = l2?.next || null
  }
  if (moveUp) cur.next = new ListNode(1)
  return node.next
}
