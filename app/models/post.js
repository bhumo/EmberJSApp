import DS from 'ember-data';
const {attr} = DS;
export default DS.Model.extend({
created_at :attr('date'),
owner : DS.belongsTo('user'),
image : attr('string'),
captions : attr('string'),
likes : attr('string')
});
