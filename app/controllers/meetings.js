import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editMeeting(){
            this.transitionToRoute('edit-meeting');
        }
    }
});
