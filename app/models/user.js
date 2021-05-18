import DS from 'ember-data';

const {attr} = DS
export default DS.Model.extend({
    coalesceFindRequests: true,
    name :attr('string'),
email : attr('string'),
avatar: attr('string'),
address: attr('string'),
is_active: attr('boolean'),
phone: attr('string'),
created_at: attr('date'),
updated_at: attr('date'),
role: attr('string'),
status: Ember.computed('is_active',function(){
    return this.get('is_active') ? 'activeUser' : 'inactiveUser'; 
}),
posts : DS.hasMany('post', {async: true}),
tasks : DS.hasMany('task',{async: true})
});
