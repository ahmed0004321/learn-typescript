//keyof : type opearator

type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
}
//nicher ai 2 line same but how
type MyVehicle1 = 'bike' | 'car' | 'cng';
type MyVehicle2 = keyof RichPeopleVehicle;//mane ami keyof use kore 
// union type hishebe use korte parteci

const vehicle: MyVehicle2 = 'bike'; // 2tai accept korbe

type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}

const user: User = {
    id: 222,
    name: 'oasif',
    address: {
        city: 'ctg'
    },
};

const myId = user['id'];
const myName = user['name'];
const address = user['address'];

//akhon ami chai akta function create korte 
//jekhane akta object pathale oi object er value gula amake dibe

const getPropartyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key]
}
const result1 = getPropartyFromObj(user, 'name');
console.log(result1);

const product = {
    brand: "HP"
}

const result2 = getPropartyFromObj(product, 'brand')
console.log(result2);

//shobar jonnoi user korlam 
//keyof x theke type peye jacche
// checkout
// checkout
// checkout
// checkout
// checkout
// checkout