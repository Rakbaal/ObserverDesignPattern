import IObserver from "./iobserver";

export default interface ISubject {
    attach(observer:IObserver):void
    notify():void
}