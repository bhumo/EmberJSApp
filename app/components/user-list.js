import Component from '@ember/component';

export default Component.extend({
    actions:{
       
        deleteUser(user,event){
            // There is a bug with delete User whenever i delete the user it does not delete from the view

            console.log(event);
            console.log(user);
            //console.log(this.get('user'));
            user.destroyRecord();
         // currentUser.deleteRecord();
         // currentUser.save();
        },
        
    }
});
