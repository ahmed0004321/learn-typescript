// constrain mane: strict rules dewa

//generic e akta issue holo jekeno value i pass kora hok oi return kore dibe 
// but development e kicu jinish thake 
//jemon data er vitor name and id proparties must thaktei hobe
//so ai jonno constraint holo bole dewa je jemon datai daw 
//data er vitor must be oi selected proarites gula na thakle 
//error

// ata likhe <T extends {id: number, name: string}> aivabe
//akhon jodi ami student 3 as an argument hishebe pathai
//oi mind korbe bolbe amake emon datai pathao jar moddhe 
// at least id and name as a proparity hishebe ace.

//jehutu extended or required data boro lagtece tai chaile type use korte pari

type student = {id: number, name: string, dateOfBirth: string, class: string}

const addStudentToCourse = <T extends student>(studentInfo: T) => {
    return {
        CourseName: 'Next Level Web Development',
        ...studentInfo
    }
};

const student1 = {
    id: 123,
    name: 'oasif',
    hasPen: true
};
const student2 = {
    id: 321,
    name: 'Oasif Ahmed Rikto',
    hsCar: true,
    isMarried: true
};

const student3 = {
    hasWatch: true,
}
const student4 = {
    name: 'Oasif',
    id: 444,
    dateOfBirth: '13 Nov',
    class: 'University'
}

const sendStudentData = addStudentToCourse(student4);
console.log(sendStudentData);