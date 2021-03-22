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
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let head = new ListNode('head'); // 头结点
    let p = head;
    let cnt = 0; // 进位
    while (l1 || l2) {
        let ans = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + cnt;
        cnt = ans >= 10 ? 1 : 0;
        p.next = new ListNode(ans % 10);
        p = p.next;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    cnt && (p.next = new ListNode(cnt));
    return head.next;
}

// (2 -> 4 -> 3) + (5 -> 6 -> 4)

addTwoNumbers()