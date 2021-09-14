/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if (!l2)
      return l1
    if (!l1)
      return l2
    let l3 = new ListNode(l1.val < l2.val ? l1.val : l2.val)
    if (l1.val < l2.val) {
      l1 = l1.next
    } else {
      l2 = l2.next
    }
    let head = l3
    while (l1 && l2) {
      l3.next = new ListNode(l1.val < l2.val ? l1.val : l2.val)
      l3 = l3.next
      if (l1.val < l2.val)
        l1 = l1.next
      else
        l2 = l2.next
    }

    while (l1) {
      l3.next = new ListNode(l1.val)
      l3 = l3.next
      l1 = l1.next
    }

    while (l2) {
      l3.next = new ListNode(l2.val)
      l3 = l3.next
      l2 = l2.next
    }
    return head
};