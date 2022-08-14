import EmberRouter from '@ember/routing/router';
import config from 'test-book/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('meetings');
  this.route('books');
  this.route('speakers');
  this.route('edit-book', { path: 'books/edit-book'});
  this.route('edit-speaker', { path: 'speakers/edit-speaker'});
  this.route('edit-meeting', { path: 'meetings/edit-meeting'});
  this.route('edit-report', { path: 'meetings/edit-meeting/edit-report'});
});

export default Router;