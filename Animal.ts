export class Animal{
private name: string;
private Age:number;
public weight: number;

    constructor(name:string, weight:number,Age:number){
        this.name = name;
        this.Age = Age;
        this.weight = weight;
    }
eat(quantity: number): void {
        console.log("the animal has eaten " + quantity);
        
    }

getName():string{
    return this.name
}
setName(Name):void{
    this.name = Name
}
getAge(){
    return this.Age
}
setAge(Age:number):void{
        this.Age = Age
    }
}