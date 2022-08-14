import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editSpeaker(){
            this.transitionToRoute('edit-speaker');
        }
    }
});
