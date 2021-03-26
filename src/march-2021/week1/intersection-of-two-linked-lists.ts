export class ListNode {
    next: ListNode | null;
    val: number;

    constructor(val?: number, next?: ListNode | null) {
        this.next = next || null;
        this.val = val || 0;
    }
}

/**
 * Given the heads of two singly linked-lists headA and headB, return the node
 * at which the two lists intersect. If the two linked lists have no
 * intersection at all, return null.
 * 
 * For example, the following two linked lists begin to intersect at node c1:
 * (see `assets/march-2021/week1/intersection-of-two-linked-lists/ref.png`)
 * 
 * It is guaranteed that there are no cycles anywhere in the entire linked
 * structure.
 * 
 * Note that the linked lists must retain their original structure after the
 * function returns.
 * 
 * @param headA The first list
 * @param headB The second list
 * @returns The list node where the intersection occurs, or null if none
 */
export const getIntersectionNode = (headA: ListNode | null, headB: ListNode | null): ListNode | null => {
    // If either list is null, then there is no intersection
    if (!headA || !headB) {
        return null;
    }

    // We're going to use "stacks" to hold the nodes so we can traverse
    // backwards later. This will mean an increase in memory usage.
    const stackA: ListNode[] = [];
    const stackB: ListNode[] = [];

    // This cursor will be used for traversing lists
    let cursor: ListNode | null = headA;

    // Push the nodes of list A to its related stack
    while (cursor) {
        stackA.push(cursor);
        cursor = cursor.next;
    }

    cursor = headB;

    // Push the nodes of list B to its related stack
    while (cursor) {
        stackB.push(cursor);
        cursor = cursor.next;
    }

    // If the lists intersect, we are guaranteed to end on the same node. If we
    // do not, then we haven't intersected, and can bail
    if (stackA[stackA.length - 1] !== stackB[stackB.length - 1]) {
        return null;
    }

    cursor = stackA.pop() || null;
    stackB.pop();

    // We'll keep going up our lists until we get to a point when they diverge,
    // or one of the lists end. At that point, cursor will point to the
    // intersection node
    while(cursor) {
        // This refers to the node that occurs previously in the list (going the
        // original direction)
        const prevA = stackA.pop() || null;
        const prevB = stackB.pop() || null;

        if (prevA !== prevB) {
            break;
        }

        cursor = prevA;
    }

    return cursor;
};
