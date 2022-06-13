"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
        this._side = 5;
    }
    get side() {
        return this._side;
    }
    set side(side) {
        this._side = side;
    }
    getSquareArea() {
        return Math.pow(this.side, 2);
    }
    getSquarePerimeter() {
        return this.side * 4;
    }
    toString() {
        return "A Square with width = "
            + this.width
            + ", which is a subclass of "
            + super.toString();
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map