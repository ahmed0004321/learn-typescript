//spread operator
const friends = ['rocky', 'jony', 'imtiaz'];

const schoolfriends = ['ahsanul', 'rahat', 'shimanto', 'atik'];

const collegeFriends = ['mehedi', 'bahar', 'sakib', 'rashed'];

friends.push(...schoolfriends);
console.log(friends);

const user = {
    name: 'oasif',
    phoneNum: '01734449965'
}
const otherInfo = {
    middleName: 'ahmed',
    bankId: '007'
}

const userInfo = {...user, ...otherInfo};
console.log(userInfo);

//rest operator

const invite = (...friends: string[]) => {//aikhane single single argument ashtece, but jehutu ...friends dici
    // joto choriye chitiye thaka element thakuk sheta ke array banay die dibe
    const allFriends = friends.forEach(friend => {
        console.log(`${friend} you are invited to my wedding`);
    });
}
invite('oasif', 'rocky', 'imtiaz', 'jony', 'samin', 'chopol');