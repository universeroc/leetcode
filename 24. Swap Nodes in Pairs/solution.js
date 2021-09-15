/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if (!head || !head.next)
        return head
    
    let p = o = head, q = head.next, r = q.next, h
    while (p && o) {
      p.next = r
      q.next = p
      if (o !== p)
        o.next = q
      if (!h)
        h = q
      o = p
      p = r
      if (!p)
          break
      q = r.next
      if (!q)
          break
      r = q.next
    }
    return h
};