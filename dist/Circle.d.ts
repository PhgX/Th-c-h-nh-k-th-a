import { Shape } from "./shape";
export declare class Circle extends Shape {
    private _radius;
    constructor(color: string, filled: boolean, radius: number);
    get radius(): number;
    set radius(radius: number);
    getArea(): number;
    getPerimeter(): number;
    toString(): string;
}
