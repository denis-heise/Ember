import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);
        this.set('book', EmberObject.create());
    },

    actions: {
        editBook(){
            this.transitionToRoute('edit-book');
        }
    },
    queryParams: ["search"],
    search: ''
});
