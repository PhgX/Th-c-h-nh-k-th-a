"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
    getArea() {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    getPerimeter() {
        return 2 * this._radius * Math.PI;
    }
    toString() {
        return 'A Circle with radius = '
            + this.radius
            + ', which is a subclass of '
            + super.toString();
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map