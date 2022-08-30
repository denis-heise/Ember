import Route from '@ember/routing/route';
import {later} from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Route.extend({
    dataService: service('data'),
    queryParams:{
        name: {
            refreshModel: true
        }
    },

    model({name}){
        return new Promise((resolve, reject) => {
            later(async () => {
                try {
                     let nameSpeaker = name ? await this.get("dataService").getSpeakersInfo(name) : await this.get("dataService").getSpeakersInfo();
                    resolve(nameSpeaker);
                }
                catch(e){
                    reject('Connection failed');
                }
            })
        })
    },
    actions: {
        loading(){
            return false;
        }
    }
});
