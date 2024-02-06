import { Animal } from "./Animal";
import { Mammal } from "./Mammal";
import { Bird } from "./Bird";

const mammal= new Mammal ("Elephant", 15, 600, "Grayish")
const bird = new Bird ("Eagle", 10, 7, 2);

console.log(`Name: ${mammal.getName()}, Age: ${mammal.getAge()}`);
mammal.breastFeed
console.log(`          `);
mammal.setName("Leopard")
mammal.setAge(5)
mammal.setCoat("Yellow")
console.log(`Name: ${mammal.getName()}, Age: ${mammal.getAge()}`);

