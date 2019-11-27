export class Triangle {
  constructor(x,y,z) {
    this._x = x;
    this._y = y;
    this._z = z;
  }
  
  kind() {
    let x = this._x ;
    let y = this._y ;
    let z = this._z ;

    if (x <= 0 || y <= 0 || z <= 0) throw new Error;
    else if (x+y<z || y+z<x || z+x<y) throw new Error;
    else if (x == y && y == z) return 'equilateral';
    else if (x == y || y == z || z == x) return 'isosceles';
    else return 'scalene';
  }
}