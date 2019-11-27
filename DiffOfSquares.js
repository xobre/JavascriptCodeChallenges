export class Squares {
  constructor(input) {
    this._squareSum = input;
    this._sumSquare = input;
  }
// Sum of Squares (0^2 + 1^2 ... + X^2)
  get sumOfSquares() {
    let temp = this._sumSquare;
    let adding = 0;
    while(temp > 0){
     adding += temp * temp;
     temp --;
    }
    this._sumSquareResult = adding;
    return this._sumSquareResult;
  }
// Square of the Sum (0-X)^2
  get squareOfSum() {
    let temp = this._squareSum;
    let adding = 0;
    this._squareSumResult = 0;
    while (temp > 0){
    adding += temp;
    temp--;
    }
    this._squareSumResult = adding*adding;
    return this._squareSumResult;

  }

  get difference() {
return Math.abs(this._squareSumResult - this._sumSquareResult);
  }
}