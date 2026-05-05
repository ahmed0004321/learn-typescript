//nullable types
const getUser = (input: string | null) => {
    if(input){
        console.log(`from DB ${input}`);
    }else{
        console.log('All user From DB');
    }
}
getUser('null')

//unknown types
const discountCalculator = (input:unknown) => {
    if(typeof input === 'number'){
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }else if(typeof input === 'string'){
        const [splittedPrice] = input.split(" ");
        console.log(Number(splittedPrice)*0.1);
    }else{
        console.log('please put valid value');
    }
}
discountCalculator(100);
discountCalculator('100 TK');
discountCalculator(null);

//void

const throwError = (msg: string) => {
    throw new Error(msg)
    
}
