//mapped types

const arrayOfNum: number[] = [1, 2, 4];

const arrayOfString: string[] = ['1', '2', '3'];

const arrayOfStringUsingMap : string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);


type AreaOfNum = {
    height: number;
    width: number;
}

// type AreaOfString = {
//     height: string;
//     width: string;
// };

type AreaOfString = {
    [key in "height" | "width"]: string;//aita hardcoded vabe ace
    //   // aivabeo type define kora jay
}

//jemon dhro AreaOfNum ace as type number hishebe so ami chai
//same key gula with string or boolean a...

//so 
type AreaOfBoolean = {
    [key in keyof AreaOfNum]: boolean; //akhane just
    //  areaOfNum er key gula nie oder type boolean kore dilam
}

//generic use kore dynamic type recieve hobe

type Area<T> = {
    [key in keyof T]: T[key];
}

const area1: Area<{height: string; width: number}> = {
    height: '40',
    width: 40
};
