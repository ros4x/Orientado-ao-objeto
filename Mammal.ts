import { Animal } from "./Animal";

export class Mammal extends Animal{
private coat:string;

constructor(name:string, Age:number, weight:number, coat:string){
    super(name, Age, weight)
    this.coat = coat;
}

getCoat():string{
    return this.coat
}
setCoat(coat:string):void{
    this.coat = coat

}

breastFeed(){
    console.log("the mammal is breastfeeding");
    
}

}