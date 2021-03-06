//Design a class to calculate the median of a number stream. The class should have the following two methods:

// insertNum(int num): stores the number in the class
// findMedian(): returns the median of all numbers inserted in the class
// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b)); // containing first half of numbers
    this.minHeap = new Heap([], null, ((a, b) => b - a)); // containing second half of numbers
  }

  insert_num(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      // we have even number of elements, take the average of middle two elements
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }

    // because max-heap will have one more element than the min-heap
    return this.maxHeap.peek();
  }
}
