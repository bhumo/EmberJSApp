import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return {
         currentUser : this.store.findRecord('user', params.user_id),
        } 
    }
});
