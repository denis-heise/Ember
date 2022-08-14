import Controller from '@ember/controller';
import config from 'test-book/config/environment';

export default Controller.extend({
    actions: {
        editSpeaker(){
            location=config.rootURL +'speakers/edit-speaker';
        }
    }
});
