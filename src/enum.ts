//enum is a set of fixed string letaral ak jaygay rakhe

// type UserRoles = "admin" | 'editor' | 'viewer';

enum UserRoles {
    admin = 'admin',
    editor = 'editor',
    viewer = 'viewer'
}
// dot notation use kore as a type hishbe use korte parbo

const canEdit = (role: UserRoles) => {
    if(role === UserRoles.admin || role === UserRoles.editor){
        return true;
    }else{
        return false;
    }
};

const isEditPermissable = canEdit(UserRoles.admin);
console.log(isEditPermissable);