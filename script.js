export class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0) return null;

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }

    return null;
  }

  pop() {
    if (!this.head) return 'Nothing to remove!';

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this.size--;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `(${current.value})` + ' -> ';
      current = current.nextNode;
    }
    console.log(result + 'null');
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.nextNode
      }
      node.nextNode = prev.nextNode
      prev.nextNode = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return null;

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.nextNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.nextNode;
      }
      removedNode = prev.nextNode;
      prev.nextNode = removedNode.nextNode;
    }
    this.size--;
    return removedNode.value;
  }
}
