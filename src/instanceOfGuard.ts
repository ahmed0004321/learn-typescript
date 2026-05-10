//oop: instance of type guard / type narrowing

class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }
    //common method
    getSleep(numOfHrs: number){
        console.log(`this ${this.name} doinik ${numOfHrs} ghumay`);
    }
}
//person class theke derived class create kri

class Student extends Person {
    constructor(name: string){
        super(name)
    }
    //method define kori
    doStydy(numOfHrs: number){
        console.log(`${this.name} daily study ${numOfHrs} kore`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    takeClass(numOfHrs: number){
        console.log(`${this.name} doinik ${numOfHrs} class nay`);
    }
}

// function guard: smart developer ra use kore

// const isStudent = (user: Person) => {
//     return user instanceof Student 
// }


const getUserInfo = (user: Person) => {//
    //kono class er blue print theke normal object toiri kora hoy
    //tokhon bola hoy oi class er instance
    //instance of guard die check korteci
    if(user instanceof Student){
        user.doStydy(6);
    }else if(user instanceof Teacher){
        user.takeClass(99);
    }else{
        user.getSleep(15);
    }
     
}
const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");
getUserInfo(teacher1);