"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(width, height, color, filled) {
        super(color, filled);
        this._width = 5;
        this._height = 5;
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    getRectArea() {
        return this.width * this.height;
    }
    getRectPerimeter() {
        return (this.width + this.height) * 2;
    }
    toString() {
        return "A Rect with width = "
            + this.width
            + ' and height = '
            + this.height
            + ", which is a subclass of "
            + super.toString();
    }
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map