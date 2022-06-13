"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this._color = 'green';
        this._filled = true;
        this._color = color;
        this._filled = filled;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get filled() {
        return this._filled;
    }
    set filled(filled) {
        this._filled = filled;
    }
    toString() {
        return "A shape with color of "
            + this.color
            + ' and '
            + ((this.filled) ? 'filled' : 'not filled');
    }
}
exports.Shape = Shape;
//# sourceMappingURL=shape.js.map