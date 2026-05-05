//non-premitive is array and object
let bazarList = ['eggs', 'milk', 'suger'];
bazarList.push('tomato');
console.log(bazarList);
//in this way I can push only string type because ts smartly bujhe gece ata string ace shob tai
//console.log(bazarList.push(23));//this way I can't push because ts only understand inside array it has only string

const mixedArr: (string | number)[] = ['eggs', 12, 'milk', 13, 'suger', 4];// now ami define kori nai so in this case ts will automatically 
//understand it's type which is string | number[] mixed, and I can push only string and number type in this array

//tuple
let cuple: [string, string] = ['husband', 'wife'];
let oasifNameAndRoll: [string, number] = ['oasif', 7]//amra chaile 0 index e number type boshate parbo na string type thakte hobe
// 3 element wala tuple o hoy
let destination: [string, string, string] = ['dhaka', 'chittagong', '3hrs'];

//objects
// const user: {
//     organization: 'programming hero';//jehutu value type hishebe use hocche atake bole
//     //litarel type
//     firstName: string  ;
//     middleName?: string; //? aita mane optional mane thaketeo pare nao pare akhn jodi middle name shory dei taw error dibe na
//     lastName: string;
//     isMarried: boolean
// } = {
//     organization: 'programming hero',
//     firstName: 'oasif',
//     lastName: 'rikto',
//     isMarried: true
// }

//aita ar o ak vabe kora jay using access modifires
const user: {
    readonly organization: string;//readonly ke bole access modifires 
    //mane ata ke ar change korte parba na karon ata readonly 
    firstName: string  ;
    middleName?: string; //? aita mane optional mane thaketeo pare nao pare akhn jodi middle name shory dei taw error dibe na
    lastName: string;
    isMarried: boolean
} = {
    organization: 'programming hero',
    firstName: 'oasif',
    lastName: 'rikto',
    isMarried: true
}


user.organization = 'deals&bids';
console.log(user);
//emon jinish o hoy je organization kokhonoi change hobe na so ai khetre jokhon amra type define korbo
//tokhon string er jaygay just value ta die dibo