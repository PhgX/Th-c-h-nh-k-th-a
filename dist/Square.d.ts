import { Rectangle } from "./Rectangle";
export declare class Square extends Rectangle {
    _side: number;
    constructor(side: number, color: string, filled: boolean);
    get side(): number;
    set side(side: number);
    getSquareArea(): number;
    getSquarePerimeter(): number;
    toString(): string;
}
