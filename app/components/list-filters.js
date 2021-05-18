import Component from '@ember/component';

export default Component.extend({
    value : '',
    init(){
        this._super(...arguments);
        this.get('filter')('').then((results) => this.set('results', results));        
    },
   actions:{
    handleInputFilter(){
        
        //console.log(model);
        console.log(this.get('value'));
        let inputValue = this.get('value');
        let filterAction = this.get('filter');
        console.log(filterAction);
        filterAction(inputValue).then(
            (filteredResult)=> this.set('results',filteredResult)
            
        );
   } 
    },
});
