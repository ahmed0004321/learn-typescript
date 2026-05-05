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
// as string or as number likhe dilei done...akhon chaile amra otake die jekono type method use korte parbo
//like result1.all the number methods
console.log(result1);
const result2 = kgtoGMConverter('2 KG') as string;
console.log(result2);

//final verdict:
//typescript theke jokhon amra better type define korte parbo sheitai type assertion.
//jokhon amra akdom e sure that ata must number or must string tokhon e as use kore type define koro.

// jokhon kono third party libray use kori tokhon jodi type support na thake tokhon ai type assertion use korte hoy