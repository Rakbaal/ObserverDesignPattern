import Board from "./board";
import IObserver from "./iobserver";
import display from "../displayable/display";

export default class Tile implements IObserver {
    id:number
    active:boolean
    
    constructor(id:number) {
        this.id = id
    }

    update(subject:Board): void {
        this.active = this.id === subject.position
        this.render()
    }

    render():void {
        display[this.active ? "enabled" : "disabled"].forEach(line => {
            console.log(line);
        })
        console.log("\n");
    }
}