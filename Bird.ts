import { Animal } from "./Animal";

export class Bird extends Animal{
private Wingspan:number

    constructor(name:string, Age:number, weight:number, Wingspan:number){
    super(name, Age, weight)
    this.Wingspan = Wingspan;
}
getWingspan(){
    return this.Wingspan}

setWingspan(Wingspan:number):void{
    this.Wingspan = Wingspan
}
fly(height:number):void{
    console.log("The bird is fly" + height);
    }
}