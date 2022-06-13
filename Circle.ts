import { Shape } from "./shape";

export class Circle extends Shape {
    private _radius: number;
    constructor (color: string, filled: boolean, radius: number){
        super(color, filled);
        this._radius = radius;
    }

    get radius(){
        return this._radius;
    }
    set radius(radius: number){
        this._radius = radius;
    }

    getArea(): number{
        return Math.pow(this._radius, 2)*Math.PI;
    }

    getPerimeter(): number{
        return 2*this._radius*Math.PI;
    }

    toString(): string {
        return 'A Circle with radius = ' 
        + this.radius
        + ', which is a subclass of '
        + super.toString();
    }

}