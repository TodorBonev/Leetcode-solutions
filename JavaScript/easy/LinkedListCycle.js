function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const head = {
    value: 3,
    next: {
        value: 2,
        next: {
            value: 0,
            next: {
                value: 4
            }
        }
    }
};

head.next.next.next = head;
console.log(hasCycle(head));