class BetterArray {
  array;
  constructor() {
    this.array = [];
  }

  getArray() {
    return this.array;
  }

  addItem(item) {
    this.array = [...this.array, item];
  }

  removeItem(item) {
    this.array = this.array.filter((element) => element !== item);
  }

  modifyItem(oldItem, newItem) {
    const idx = this.array.indexOf(oldItem);
    this.array[idx] = newItem;
  }
}

const numbers = new BetterArray();
console.log(numbers.getArray());
numbers.addItem(1);
numbers.addItem(4);
numbers.addItem(7);
numbers.addItem(9);
console.log(numbers.getArray());
numbers.removeItem(4);
console.log(numbers.getArray());
numbers.modifyItem(7, 6);
console.log(numbers.getArray());
