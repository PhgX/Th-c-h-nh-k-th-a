import { Shape } from "./shape";

export class Rectangle extends Shape {
    private _width: number = 5;
    private _height: number = 5;
    constructor (width: number, height: number, color: string, filled: boolean){
        super(color, filled);
        this._width = width;
        this._height = height;
    }

    get width(){
        return this._width;
    }
    set width(width: number){
        this._width = width;
    }

    get height(){
        return this._height
    }
    set height(height: number){
        this._height = height
    }

    getRectArea(): number{
        return this.width * this.height;
    }

    getRectPerimeter(): number {
        return (this.width + this.height) * 2;
    }

    toString(): string {
        return "A Rect with width = " 
        + this.width
        + ' and height = '
        + this.height
        + ", which is a subclass of "
        + super.toString();
    }
}