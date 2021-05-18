import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        selectRole(selectedRole){
            this.set('role',selectedRole);
            console.log(selectedRole);
            
        },
        editUser(currentUser){
            
            //console.log(currentUser);
            
            this.store.peekRecord('user', currentUser.get('id')).save();
            this.transitionToRoute('user.list');
        }
        }});
