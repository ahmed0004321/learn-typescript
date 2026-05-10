// oop - class - object

// class Animal {
//proparty gula define kortece
//     name: string;
//     species: string;
//     sound: string

//     constructor(name: string, species: string, sound: string){
//proparty gula ke initialize o kortece
//         this.name = name;
//         this.species = species;
//         this.sound = sound
//     }

//     makeSound(){
//         console.log(`the animal is making sound ${this.sound}`);
//     }
// }

//parameter proparties use korar maddhome 
//amader r define and initialize kora lagbe na 
//just constractor er votor proparty gular age public likhe daw done
class Animal {
    //proparty gula define kortece
    constructor(public name: string, public species: string,
         public sound: string){
        //proparty gula ke initialize o kortece
    }

    makeSound(){
        console.log(`the animal is making sound ${this.sound}`);
    }
}

const dog = new Animal('dogesh vai', 'dog', 'gheu gheu');
console.log(dog.name);
dog.makeSound();
const cat = new Animal('biral vai', 'cat', 'mew mew');
console.log(cat.sound);
cat.makeSound();// viotorer method ke call korteci