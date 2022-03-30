import AreaCalculator from './01_S/area-calculator';
import Square from './01_S/square';
import Circle from './01_S/circle';
import Triangle from './02_O/triangle';
(() => {
  const square = new Square(2);
  const circle = new Circle(2);
  const areaCalculator = new AreaCalculator([square, circle]);
  console.log('O1_S principle: ', areaCalculator.sum());

  const triangle = new Triangle(10, 2);
  const areaCalculatorWithOpenClosed = new AreaCalculator([square, circle, triangle]);
  console.log('O2_O principle: ', areaCalculatorWithOpenClosed.sum());
})();