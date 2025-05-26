function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeNodes(head) { 
    let dummy = new ListNode(0); 
    let current = dummy; 
    let sum = 0; 
    head = head.next; 

    while (head) { 
        if (head.val === 0) { 
            current.next = new ListNode(sum); 
            current = current.next; 
            sum = 0; 
        } else { 
            sum += head.val; 
        }
        head = head.next; 
    }

    return dummy.next;
}

function createLinkedList(arr) { 
    let dummy = new ListNode(0); 
    let current = dummy; 
    for (let val of arr) { 
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

const inputArray = [0, 3, 1, 0, 4, 5, 2, 0]; 
const head = createLinkedList(inputArray);  

const mergedHead = mergeNodes(head);       
printLinkedList(mergedHead);                
