/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let p = head, q = head, o = head;

    while (n-- && p) {
      p = p.next
    }

    if (!p) {
      o = o.next
      delete q
      return o
    }

    while (p && p.next) {
      p = p.next
      q = q.next
    }

    let t = q.next
    q.next = q.next.next
    delete t
    return o
};