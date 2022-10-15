import ISubject from "./isubject";

export default interface IObserver {
    update(subject:ISubject):void
}