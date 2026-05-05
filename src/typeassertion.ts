let anything: any;

anything = 'oasif';


const kgtoGMConverter = (input: number | string ): 
string | number | undefined => {
    if(typeof input === 'number'){
        return input*1000;
    }else if(typeof input === 'string'){
        const [splitString] = input.split(" ");
        return Number(splitString)*1000;
    }else{
        return 'wrong input';
    }
}

const result1 = kgtoGMConverter(23) as number;//function er return type 3 type thakleo
//jodi amra sure jani je konta number and konta string hobe oitake
// as string or as number likhe dilei done...
console.log(result1);
const result2 = kgtoGMConverter('2 KG') as string;
console.log(result2);
