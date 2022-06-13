import { Rectangle } from "./Rectangle";

export class Square extends Rectangle {
    _side : number = 5;
    constructor (side: number, color: string, filled: boolean){
        super(side, side, color, filled);
    }
    get side(){
        return this._side;
    }
    set side(side: number){
        this._side = side;
    }

    getSquareArea(){
        return Math.pow(this.side,2);
    }

    getSquarePerimeter(){
        return this.side*4;
    }

    toString(): string {
        return "A Square with width = " 
        + this.width        
        + ", which is a subclass of "
        + super.toString();
    }
}