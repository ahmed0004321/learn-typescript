type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactInfo: string;
    adress: {
        division: string;
        city: string
    },
}


const user1 :User = { //akhane User name type define korar por ai User ke ami same structure type e use 
    //korte parbo
    id: 100,
    name: {
        firstName: 'oasif',
        lastName: 'Rikto',
    },
    gender: 'male',
    contactInfo: 'nukali',
    adress: {
        division: 'dhaka',
        city: 'mirpur 1'
    }
}

const user2 :User = {
    id: 100,
    name: {
        firstName: 'oasif',
        lastName: 'Rikto',
    },
    gender: 'male',
    contactInfo: 'nukali',
    adress: {
        division: 'dhaka',
        city: 'mirpur 1'
    }
};

//for example
type IsAdmin = true;
const isAdmin : IsAdmin = true;

type Name = string;
const name: Name = 'oasif'


type addFunc = (num1: number, num2: number) => number;
//as you can see addFunc e num1 and num2 defined as number and return o korbe number
const add:addFunc = (num1, num2) => num1 + num2;