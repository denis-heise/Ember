import Controller from '@ember/controller';
import config from 'test-book/config/environment';
console.log(config)
export default Controller.extend({
    actions: {
        editMeeting(){
            location=config.rootURL +'meetings/edit-meeting';
        }
    }
});
