export class Matrix {
  constructor(input) {
    // establish rows from input string
    let lines = input.split("\n");
    this._rows = new Array(lines.length);
    for (let i=0; i<this._rows.length; i++) {
      let items = lines[i].split(" ");
      let cols = new Array(items.length);
      for (let j=0; j<items.length; j++) {
        cols[j] = parseInt(items[j], 10);
      }
      this._rows[i] = cols;
    }

    // establish columns from rows by flipping i with j
    this._cols = new Array(this._rows[0].length);
    for (let i=0; i<this._cols.length; i++) {
      let col = new Array(this._rows.length);
      for (let j=0; j<col.length; j++) {
        col[j] = this._rows[j][i];
      }
      this._cols[i] = col;
    }
  }

  get rows() {
    return this._rows;
  }

  get columns() {
 
    return this._cols;
  }
}