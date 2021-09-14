/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let head = null, p = null
    let finished = false

    do {
      let min = Number.MAX_VALUE, index = -1
      for (let i = 0; i < lists.length; ++i) {
        if (lists[i] && lists[i].val < min) {
          min = lists[i].val
          index = i
        }
      }
        
      if (min === Number.MAX_VALUE)
        break

      lists[index] = lists[index].next

      if (!p)
        p = new ListNode(min)

        if (!head) {
          head = p
        }
      else {
        p.next = new ListNode(min)
        p = p.next
      }

      for (let i = 0; i < lists.length; ++i) {
        if (lists[i]) {
          finished = false
          break
        }
      }
    } while (!finished)
    return head
};