export declare class Shape {
    private _color;
    private _filled;
    constructor(color: string, filled: boolean);
    get color(): string;
    set color(color: string);
    get filled(): boolean;
    set filled(filled: boolean);
    toString(): string;
}
