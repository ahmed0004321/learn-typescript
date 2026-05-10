//enum is a set of fixed string letaral ak jaygay rakhe

// type UserRoles = "admin" | 'editor' | 'viewer';

// enum UserRoles {
//     admin = 'admin',
//     editor = 'editor',
//     viewer = 'viewer'
// }
// dot notation use kore as a type hishbe use korte parbo

const UserRoles = {
    admin: 'admin',
    editor: 'editor',
    viewer: 'viewer'
} as const;
// UserRoles.admin = 'oasif' ami chaile change korte parbo na

//so enum use kortam karon vitorer value gula change kora jaito na
// but here ami change korte parteci as UserRole.admin = 'oasif' object use korar karone
// aita akta issue jeta solve kore as const

// const canEdit = (role: UserRoles) => {
//     if(role === UserRoles.admin || role === UserRoles.editor){
//         return true;
//     }else{
//         return false;
//     }
// };

// const isEditPermissable = canEdit(UserRoles.admin);
// console.log(isEditPermissable);

