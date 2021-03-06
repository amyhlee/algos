class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 0
  }
  append(value) {
    // example using Node class
    let newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepend(value) {
    // example without using Node class
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  insert(index, value) {
    let newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    length++
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1)
    const nodeToRemove = leader.next
    leader.next = nodeToRemove.next
    this.length--
  }
  // reverse() {
  //   if(!this.head.next) {
  //     return this.head
  //   }
  //   let first = this.head
  //   let second = this.head.next
  //   while(second) {
  //     let temp = second.next
  //     second.next = first
  //     first = second
  //     second = temp
  //   }
  //   this.head.next = null
  //   this.head = first
  //   return this
  // }
  reverse() {
    let prev = null
    let curr = this.head
    let next = null
    while(curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return this
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

function reverse(head) {
  if (head === null || head.next === null) {
    return head
  }
  let current = head,
    previous = null

    while (current !== null) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }
}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList(5))
console.log(myLinkedList(16))


function sublist(head, p, q) {
  if (p === q) {
    return head
  }
  let current = head
  let previous = null
  let i = 0

  while (curr !== null && i < p - 1) {
    previous = current
    current = current.next
    i++
  }

  let lastNodeFirstPart = previous
  let lastNodeSublist = current

  i = 0

  while (curr !== null && i < q - p + 1) {
    next = current.next
    current.next = previous
    previous = current
    current = next
    i++
  }

  if (lastNodeFirstPart !== null) {
    lastNodeFirstPart.next = previous
  } else {
    head = previous
  }

  lastNodeSublist.next = current
  return head
}

function reversedRecursive(head) {
  if (head === null || head.next === null) return head

  const reversed = reversedRecursive(head.next)
  head.next.next = head
  head.next = null
  return reversed
}
