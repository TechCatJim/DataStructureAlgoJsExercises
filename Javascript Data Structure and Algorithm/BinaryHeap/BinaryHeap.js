class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent <= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > current) ||
          (swap !== null && rightChild > leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }
    return max;
  }
}

var binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
binaryHeap.values[0]; // 5

binaryHeap.values; // [5,4,2,1,3])

binaryHeap.extractMax();
binaryHeap.values; // [4,3,2,1])

binaryHeap.extractMax();
binaryHeap.values; // [3,1,2])
