import Controller from '@ember/controller';
import config from 'test-book/config/environment';

export default Controller.extend({
    actions: {
        editMeeting(){
            location=config.rootURL +'meetings/edit-meeting';
        }
    }
});
