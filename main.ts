import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./shape";
import { Square} from "./Square";

let shape: Shape = new Shape ('red', true)
console.log(shape.toString())
console.log(shape)

let circle : Circle = new Circle ('yellow', false, 50)
console.log(circle);
console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getPerimeter());

let rect: Rectangle = new Rectangle (20, 40, 'red', true)
console.log(rect);
console.log(rect.getRectArea());
console.log(rect.getRectPerimeter());
console.log(rect.toString())

let square: Square = new Square (5, 'Orange', true)
console.log(square);
console.log(square.getSquareArea());
console.log(square.getSquarePerimeter());
console.log(square.toString())