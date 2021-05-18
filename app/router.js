import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user', function() {
    this.route('list');
    this.route('new');
    this.route('edit',{path: '/edit/:user_id'}); //user/edit/1
    this.route('view',{path:'/view/:user_id'});
  });
  
});

export default Router;
