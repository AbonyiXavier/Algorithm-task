// Ques 2: Implement preceding value in a LinkedList — Your function should receive a value and returns the preceding value in the linked list.

// When instantiated, creates a node in the Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// When instantiated, creates a linkedList instance
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // This method appends a new value to the LinkedList
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return this;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  // This method returns the value preceding the value passed into the method.
  precede(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        return currentNode.prev ? currentNode.prev.value : null;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

// instantiate the LinkedList class
const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(5);
linkedList.append("Uche");
linkedList.append(52);
linkedList.append("Xavier");

console.log(linkedList.precede(2));
