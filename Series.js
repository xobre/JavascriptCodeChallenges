export class Series {
  constructor(input) {
    this.array = input.split("").map(x => parseInt(x, 10)); // array of single digit numbers
  }

  get digits() {
    return this.array;
  }

  slices(n) {
    if (n > this.array.length) throw new Error('Slice size is too big.');
    let results = [];
    for (let i = 0; i <= this.array.length - n; i++) {
      results.push(this.array.slice(i, i+n));
    }
    return results;
  }
}