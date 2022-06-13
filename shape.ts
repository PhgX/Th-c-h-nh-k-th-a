export class Shape {
    private _color : string = 'green';
    private _filled: boolean = true;
    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }
    get color(){
        return this._color;
    }
    set color(color: string){
        this._color = color;
    }

    get filled(){
        return this._filled;
    }
    set filled(filled: boolean){
        this._filled = filled;
    }

    toString(): string{
        return "A shape with color of "
        + this.color
        + ' and '
        + ((this.filled)? 'filled' : 'not filled');
    }
}