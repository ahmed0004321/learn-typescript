//polymorphism mane bohurupi

class Person{
    //method
    getSleep(){
        console.log(`I am a normal person. I sleep for 9 hrs`);
    }
}

class Student extends Person {
    getSleep(){
        console.log(`I sleep for 8 hrs. I am a student`);
    }
}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(`I am a next level developer. I sleep for 6 hrs`);
    }
}

const getSleepingHrs = (params: Person) => {
    params.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHrs(person3);


class Shape {
    getArea() : number{
        return 0;
    }
}

class circle extends Shape{
    //area = pi * redius * redius
    getArea(redius: number){

    }
}