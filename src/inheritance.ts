class Parent {
    name: string;//common
    age: number;//common
    address: string//common

    constructor(name: string, age: number,
         address: string){
            this.name = name;
            this.age = age;
            this.address = address;
    }//common method
    getSleep(numOfHrsSleep: number){
        console.log(`${this.name} Eni ${numOfHrsSleep} ghonta ghumay`);
    }
}



class Student extends Parent  { }

const student1 = new Student(`Mr. Fakibaz`, 18, 'Bangladesh')
student1.getSleep(15);

class Teacher extends Parent{
    designation: string;//own propraty

    constructor(name: string, age: number, address: string,
        designation: string){
        
        super(name, age, address)//ai super mane
        //  parent er constractor// super er ai value gula 
        //pathay dite hobe intitialize er jonno 
        //jeta parent class er vitor e hoy
        //super kintu this keyword er age call korete hobe
        //ki holo akhne:
        //jehutu name, age, address amra parent theke pacchi
        //so constractor er vitor ai gula recieve korte hobe
        // and super jehutu parent er constructor so name, age
        //address pathay dite hobe(jar jinish take pathay daw)

            this.designation = designation;
    }
    //own method
    takeClass(hrsTakeClass: number){
        console.log(`${this.name} ${hrsTakeClass} ghonta
             class ney`);
    }
}

const teacher1 = new Teacher('Mr. Smart Teacher', 33,
     'Nukali', 'Assistant Professor');
teacher1.takeClass(5)