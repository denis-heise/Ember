import Controller from '@ember/controller';
import config from 'test-book/config/environment';

export default Controller.extend({
    actions: {
        editBook(){
            location=config.rootURL +'books/edit-book';
        }
    }
});
