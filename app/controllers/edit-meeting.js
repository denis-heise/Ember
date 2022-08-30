import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editReport(){
            this.transitionToRoute('edit-report');
        }
    }
});
