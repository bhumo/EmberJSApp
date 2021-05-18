import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';

export default Controller.extend({
actions:{
createUser(){
    let is_active = this.get('is_active')
    let created_at = new Date()
    let newUser = this.store.createRecord('user',{
        name: this.get("name"),
        email: this.get("email"),
        created_at: created_at,
        updated_at: created_at,
        role: this.get('role'),
        is_active: this.get('is_active'),
})
newUser.save()
}
}});
