//access modifires

class Bankaccount {
    readonly userId: number;
    userName: string;
    protected userBalance: number;

    constructor (userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    //method for balance add
    addBalance(balance: number){
        this.userBalance = this.userBalance + balance;
    }
}
//private ke akmatro oi class e access korte parba
// kono child o access korte parbe na
//but jodi access korte chao taile private er boldole 
//protected use korte paro
class StudentBankAccount extends Bankaccount{
     test(){
        this.userBalance;
     }
}

 

const oasifAhmedAccount =
 new Bankaccount(111, 'oasif ahmed', 5454444);

 console.log(oasifAhmedAccount.userId);
oasifAhmedAccount.userId = 4444;// amon korle change hoe jacche so
//use readonly modifires
oasifAhmedAccount.userBalance = 0;// userBalance kokono readonly 
//and 0 hoy na so user balance ke always private rakha uchit
// as you can see after telling that userbalance as private 
// it says it only can access within the class inside

oasifAhmedAccount.addBalance(100)
console.log(oasifAhmedAccount);
