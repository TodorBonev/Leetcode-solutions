function reverseList(head) { 
    let prev = null;
    let current = head; 

    while (current) { 
        let next = current.next; 
        current.next = prev;
        prev = current; 
        current = next; 
    } 

    return prev; 
}

console.log(reverseList(head = [1,2,3,4,5]))

