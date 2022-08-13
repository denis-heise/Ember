import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('header');
  this.route('meetings');
  this.route('books');
  this.route('speakers');
});

export default Router;
