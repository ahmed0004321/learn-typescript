type User = {
    name: string;
    age: number;
}

//syntax of interface
interface IUser {
    name: string;
    age: number;
}//now ami interface ke type er poriborte use korte parbo
// but there is a diffrence between type and interface:

interface IUserWithRole extends IUser{
    role: 'admin' | 'user'// ki holo Iuser er 2 ta proparty shoho IUserWithRole role shoho 3 ta wala proparty create holo
};



//for example: premitive data type er khetre
type IsAdmin = boolean;

const isAdmin: IsAdmin = false; 
//so as you can see premitive data type er khetre interface declare kora jabe na karon 
//premitive data type er type declare er shomoy interface start hoy { } diye thats the reason.

//interface: object type, array. object and function e use korte parbo.

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role;

const user1: IUserWithRole = {
    name: 'oasif',
    age: 23,
    role: 'admin'
}
const user2: IUser = {
    name: 'oasif ahmed',
    age: 25,
}

//so upper part is called intersection

//type alias er arek vai er naaam interface



// interface usecase for function
type add = (num1: number, num2: number) => number;//aita typye alias die korlam

interface Iadd {
    (num1: number, num2: number): number; //same as type jevabe declare kore 
}

const addition: add = (num1, num2) => {
    return num1 + num2;
}
console.log(addition(3, 4));

//array die akta interface example


type Friends = string[];

//akhn aita interface die kmne likhbo
interface IFriends {
    [index: number] : string;
}

const Frineds: IFriends = ['A', 'B', 'C'];
