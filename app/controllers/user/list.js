import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        filterByName(inputValue){
            console.log(inputValue);
            
            if(inputValue!= ''){
                return this.store.filter('user',function(user){
                    let name = user.get("name").toLowerCase();
                    inputValue = inputValue.toLowerCase();
                    console.log(user.get("name"));
                    console.log();                  
                    return name.indexOf(inputValue)>-1;
                });
            }else{
                return this.store.findAll('user');
            }
        }
}
});
