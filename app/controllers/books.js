import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editBook(){
            this.transitionToRoute('edit-book');
        }
    }
});
