import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editMeeting(){
            location='meetings/edit-meeting';
        }
    }
});
