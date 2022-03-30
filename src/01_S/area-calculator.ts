import { ShapesInterface } from 'src/types';

class AreaCalculator {
  private readonly shapes;

  constructor(shapes: ShapesInterface) {
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