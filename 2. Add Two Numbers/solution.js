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
 var addTwoNumbers = function(l1, l2) {
      let o = new ListNode()
      let r = o
      let h = 0
      while (l1 && l2) {
        let t = l1.val + l2.val + h
        l1 = l1.next
        l2 = l2.next
        h = Math.floor(t / 10)
        let mod = t % 10
        o.val = mod
        if (l1 && l2) {
          o.next = new ListNode()
          o = o.next
        }
      }
      
      while (l1) {
        let t = l1.val + h
        h = Math.floor(t / 10)
        let mod = t % 10  
        o.next = new ListNode(mod)
        l1 = l1.next
        o = o.next
      }
    
      while (l2) {
        let t = l2.val + h
        h = Math.floor(t / 10)
        let mod = t % 10
        o.next = new ListNode(mod)
        l2 = l2.next
        o = o.next
      }
      if (h) {
          o.next = new ListNode(h)
          o = o.next
      }
      return r
    };