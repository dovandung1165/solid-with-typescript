import Square from './square';
import Circle from './circle';

class AreaCalculator {
  private readonly shapes: (Square | Circle)[];

  constructor(shapes: (Square | Circle)[]) {
    this.shapes = shapes;
  }

  sum() {
    let areaShapes = 0;
    this.shapes.forEach((shape) => {
      areaShapes += shape.getArea();
    });
    return `Sum of all areas are ${areaShapes}`;
  }
}

export default AreaCalculator;