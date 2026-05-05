//union or > |

type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole) => {
    if(role === 'admin'){
        return 'Admin Dashboard';
    }
    else if(role === 'user'){
        return 'User Dashboard';
    }
    else{
        return 'guest dashboard'
    }
}
getDashboard('guest');

//intersection and > &

type employee = {
    id: string;
    name: string;
    phoneNo: string
};

type manager = {
    designation: string;
    teamSize: number
}

type employeeManager = employee & manager;

const oasifAhmed:employeeManager = {
    id: '001',
    name: 'oasif',
    phoneNo: '01888',
    designation: 'senior PR',
    teamSize: 33
}

console.log(oasifAhmed);