import { getIntersectionNode, ListNode } from "./intersection-of-two-linked-lists";

const makeList = (headVal: number, ...tailVals: number[]): ListNode => {
    const head = new ListNode(headVal);

    let cursor: ListNode = head;

    for (let i = tailVals.length - 1; i >= 0; i--) {
        cursor.next = new ListNode(tailVals[i], null);
        cursor = cursor.next
    }

    return head;
};

const tail = (head: ListNode): ListNode => {
    if (!head.next) {
        return head;
    }

    return tail(head.next);
};

describe("Missing Number", () => {
    test("Example 1", () => {
        // The intersected node's value is 8 (note that this must not be 0 if
        // the two lists intersect).
        // From the head of A, it reads as [4,1,8,4,5]. From the head of B, it
        // reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node
        // in A; There are 3 nodes before the intersected node in B.
        // See `assets/march-2021/week1/intersection-of-two-linked-lists/example1.png

        const sharedHead = makeList(8, 4, 5);

        const listA = makeList(4, 1);
        const listB = makeList(5, 6, 1);

        tail(listA).next = sharedHead;
        tail(listB).next = sharedHead;
        
        expect(getIntersectionNode(listA, listB)).toBe(sharedHead);
    });
    
    test("Example 2", () => {
        // The intersected node's value is 2 (note that this must not be 0 if
        // the two lists intersect).
        // From the head of A, it reads as [1,9,1,2,4]. From the head of B, it
        // reads as [3,2,4]. There are 3 nodes before the intersected node in A;
        // There are 1 node before the intersected node in B.
        // See `assets/march-2021/week1/intersection-of-two-linked-lists/example2.png

        const sharedHead = makeList(2, 4);

        const listA = makeList(1, 9, 1);
        const listB = makeList(3);

        tail(listA).next = sharedHead;
        tail(listB).next = sharedHead;
        
        expect(getIntersectionNode(listA, listB)).toBe(sharedHead);
    });

    test("Example 3", () => {
        // The two lists do not intersect, so return null.
        // From the head of A, it reads as [2,6,4]. From the head of B, it reads
        // as [1,5]. Since the two lists do not intersect, intersectVal must be
        // 0, while skipA and skipB can be arbitrary values.
        // See `assets/march-2021/week1/intersection-of-two-linked-lists/example3.png

        const listA = makeList(2, 6, 4);
        const listB = makeList(1, 5);
        
        expect(getIntersectionNode(listA, listB)).toBe(null);
    });
});