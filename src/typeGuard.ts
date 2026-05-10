//type guard

type Alphanumeric = number | string;
const add = (num1: Alphanumeric, num2: Alphanumeric) => {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;//error dicce na karon if stetement tai holo
        //typeguard aita use korate type nerrow hoe gelo
    }else{
        return num1.toString()+num2.toString();
    }
}

//ami chai ata 2, 2 dileeo 22 dibe 
//abr 2, '2' dileo 22 dibe
//abr '2', '2' dileo 22 ashbe
//tar mane amader ke number nad string type bole dite hobe
add(2, 2);
add(2, '2');
add('2', 2);
console.log(add('2', '2'));

//in typeof or in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: 'Admin';
}

const getUserInfo = (user: NormalUser | AdminUser) => {
    if('role' in user){//akhane ki korlam: 
        //bole dilam je jodi role user er moddhe thake tailei 
        // bujhe newa jabe role ta kar moddhe ace// so atai in guard
        console.log(`${user.name} and his role is ${user.role}`);
    }else{
        console.log(`${user.name}`);
    }
}
getUserInfo({name: 'Normal', role: 'Admin'})