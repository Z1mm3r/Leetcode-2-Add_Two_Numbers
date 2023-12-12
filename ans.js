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
    
    let output = new ListNode(undefined, undefined)
    let curr = output;
    let carry = 0;
    while((l1) || (l2)){
        let value = 0;
        if(l1){
            value += l1.val;
            l1 = l1.next;
        }
        if(l2){
            value += l2.val
            l2 = l2.next
        }

        value += carry;
        carry = 0;

        if(value > 9){
            value -= 10;
            carry = 1;
        }

        curr.next = new ListNode(value)
        curr = curr.next;
    
    }

    if(carry){
        curr.next = new ListNode(carry)
    }

    return output.next ? output.next: output

};
