//dynamically generalize kora

//akhon ami ai array string, array number and array boolean generalize mane shobar jon no korte chai

type genericArray<T> = Array<T>; //akhn ami ai akta line die 3 tar jonnoi use korte parteci
//jehutyu ata typescript er parameter so conventionl way holo T use kora

// const friends : string[] = ['Mr. x', 'Mr.Y', 'Mr. z'];  //we can define differnt way of array
const friends : genericArray<string> = ['Mr. x', 'Mr.Y', 'Mr. z'];  //we can define differnt way of array

// const rollNumbers : number[] = [33, 5, 44];
const rollNumbers : genericArray<number> = [33, 5, 44];

// const isEligibleList: boolean = [true, false, true];
const isEligibleList: genericArray<boolean> = [true, false, true];


//generic example for tuples

type coordinates<x, y> = [x, y];// tuples er 2 ta value er jonno 2 ta parameter

const coordinates1: coordinates<number, number> = [44, 67];
const coordinates2: coordinates<string, string> = ['20', '30'];


//generic for objects

type User = {name: string; age: number};

const userList: genericArray<User> = [
{
    name: 'oasif',
    age: 22,
},
{
    name: 'ahmed',
    age: 25,
}
]