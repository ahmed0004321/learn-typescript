// static in typescript

class Counter {
    static count: number = 0;//jehutu static use korci ata 
    // akhn Counter er premium proparty hoe gece //akhanei initialize kore fellam
    // tai constractor dorkar nai

    //method
    increment(){
        return Counter.count = Counter.count + 1;
    }

    decrement(){
        return Counter.count = Counter.count - 1;
    }
}

const instance1 = new Counter();

console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());

const instance2 = new Counter();
console.log(instance2.increment());
console.log(instance2.increment()); 

//aivabe likhle ki hocche:
// uporer console akta memory hocche 
// nicher console e akta memory hocche
// ami chaiteci je akta memory tei save thakuk
// so ai jonno static keyword use korte hobe

//after adding static keword memeory aktai hoe gece
// method keo static keyword use korte paro



