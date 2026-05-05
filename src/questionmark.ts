// ? : tarnary operator

// ?? : nullish coalascing just only work (null and undefined) er upor vitti kore
// ? optional chanining

const biyerJonnoEligible = (age: number) => {
    // if(age >= 21){
    //     console.log('you are eligible');
    // }
    // else{
    //     console.log('you are not eligible');
    // }
    //if else er poriborte tarnary operator use kore
    (age >= 21) ? console.log('you are eligible') : console.log('you are not eligible');
}
biyerJonnoEligible(21);

// nullish coalascing
const userTheme = undefined;
const selectedTheme = userTheme ?? 'light theme';//jodi userTheme undefined ba null hoy tailei defalt vabe ata select hobe
console.log(selectedTheme);