import { Shape } from "./shape";
export declare class Rectangle extends Shape {
    private _width;
    private _height;
    constructor(width: number, height: number, color: string, filled: boolean);
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    getRectArea(): number;
    getRectPerimeter(): number;
    toString(): string;
}
