import Controller from '@ember/controller';
import config from 'test-book/config/environment';

export default Controller.extend({
    actions: {
        editReport(){
            location=config.rootURL + 'meetings/edit-meeting/edit-report';
        }
    }
});

// export function url([property]) {
//     return get(ENV, property);
//   }
  
//   export default helper(url);