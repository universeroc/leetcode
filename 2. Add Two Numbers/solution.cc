/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
 public:
  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    if (!l1)
      return l2;
    if (!l2)
      return l1;

    ListNode* root = new ListNode(0);
    ListNode* o = root;
    int i = 0;
    while (l1 && l2) {
      int sum = l1->val + l2->val + i;
      if (sum > 9) {
        i = 1;
        sum -= 10;
      } else {
        i = 0;
      }
      o->val = sum;
      l1 = l1->next;
      l2 = l2->next;
      if (l1 || l2 || i) {
        o->next = new ListNode(0);
        o = o->next;
      }
    }
    while (l1) {
      int sum = l1->val + i;
      if (sum > 9) {
        i = 1;
        sum -= 10;
      } else {
        i = 0;
      }
      o->val = sum;
      l1 = l1->next;
      if (l1 || i) {
        o->next = new ListNode(0);
        o = o->next;
      }
    }
    while (l2) {
      int sum = l2->val + i;
      if (sum > 9) {
        i = 1;
        sum -= 10;
      } else {
        i = 0;
      }
      o->val = sum;
      l2 = l2->next;
      if (l2 || i) {
        o->next = new ListNode(0);
        o = o->next;
      }
    }

    while (i) {
      int sum = o->val + i;
      if (sum > 9) {
        i = 1;
        sum -= 10;
      } else {
        i = 0;
      }
      o->val = sum;
      if (i) {
        o->next = new ListNode(0);
        o = o->next;
      }
    }

    return root;
  }
};