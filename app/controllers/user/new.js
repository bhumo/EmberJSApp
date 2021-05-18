import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';
import {computed} from '@ember/object';
export default Controller.extend({
actions:{
selectRole(selectedRole){
    this.set('role',selectedRole);
    console.log(selectedRole);
},
createUser(){
    
    let created_at = new Date();
    let is_active = this.get("is_active");
    console.log(is_active);
    let status = is_active ? 'activeUser': 'inactiveUser'
    var role = this.get("role");
    if (role == undefined) role="admin";
    let newUser = this.store.createRecord('user',{
        id: this.get("id"),
        name: this.get("name"),
        email: this.get("email"),
        phone: this.get("phone"),
        address: this.get("address"),
        is_active: this.get("is_active"),
        created_at: created_at,
        updated_at: created_at,
        role: role,
        is_active: this.get('is_active'),
        status: status
    })
    newUser.set('id',this.get('id'));
    newUser.save();
    this.transitionToRoute('user.list'); 
}
}
});
