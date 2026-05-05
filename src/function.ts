// in typescript function also two types
//1> Normal Function,
//2> Aerrow Function

//normal:
function add(num1:number, num2:number):number{
return num1 + num2;
}
console.log(add(4, 4));

//aerrow:
const addArrow = (num3:number, num4:number):number => {
    return num3 + num4;
}
//these two are the syntax of functions
console.log(addArrow(5, 6));

//function method
//object er moddhe properties er moddhe function declare korlei otake bole object

const richUser = {
    name: 'oasif',
    balance: 0,
    addBalance(value: number){
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}
console.log(richUser.addBalance(20));

//loop er moddhe function 
//ar ak naam call back function

const arr : number[] = [11, 33, 44, 55];
const arrMap = arr.map((elem:number):number => elem*elem);
console.log(arrMap);