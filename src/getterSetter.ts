//getter and setter

//access modifires

class Bankaccount {
    public readonly userId: number;
    public userName: string;
    private userBalance: number;

    constructor (userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    //method for balance add
    //balance ke set kortece
    set setBalance(balance: number){
        this.userBalance = this.userBalance + balance;
    }

    // get korbo
    get getBalance(){
        return this.userBalance;// jehutu get korteci so it must
        //return 
    }
}
 
 

const oasifAhmedAccount =
 new Bankaccount(111, 'oasif ahmed', 55);

//  oasifAhmedAccount.setBalance(100);//function call korte hocce
//  oasifAhmedAccount.setBalance(70);

// console.log(oasifAhmedAccount.getBalance()); // ai gula get and set 
// work kore na nicher ta get and set call korar niyom


oasifAhmedAccount.setBalance = 100; // new balance add korteci
oasifAhmedAccount.setBalance = 100;
oasifAhmedAccount.setBalance = 100;
console.log(oasifAhmedAccount);