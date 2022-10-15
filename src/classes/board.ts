import ISubject from "./isubject";
import Tile from "./tile";
import IObserver from "./iobserver";
import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

export default class Board implements ISubject {
    position: number
    observers: Array<IObserver>

    constructor() {
        this.position = 0
        this.observers = []
    }

    attach(observer: Tile): void {
        this.observers.push(observer)
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.update(this)
        });
    }

    move(direction: string) {
        switch (direction) {
            case "u":
                console.log("Moving up");
                this.position = this.position === 0 ? this.observers.length - 1 : this.position - 1
                this.notify()
                break
            case "d":
                console.log("Moving down");
                this.position = this.position === this.observers.length - 1 ? 0 : this.position + 1
                this.notify()
                break
            default:
                this.notify()
                break
        }
    }

    awaitMovement():void {
        const rl = readline.createInterface({
            input: stdin,
            output: stdout
        })

        let cb = (answer: string) => {
            this.move(answer)
            rl.close
            this.awaitMovement()
        }
        
        rl.question("Which direction do you want to go ? (u = up, d = down, else = stay in place)\nYour input : ", cb.bind(this))
    }

    initialize():void {
        this.notify()
    }
}