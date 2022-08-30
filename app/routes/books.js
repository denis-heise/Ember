import Route from '@ember/routing/route';
import {later} from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Route.extend({
    dataService: service('data'),
    queryParams:{
        search: {
            refreshModel: true
        },
        tag:{
            refreshModel: true
        }
    },

    model(queryParams){
        return new Promise((resolve, reject) => {
            later(async () => {
                try {
                     let books = queryParams.search ? await this.get("dataService").getBooksInfo(queryParams.search) : await this.get("dataService").getBooksInfo();
                     books = queryParams.tag ? await this.get("dataService").getBooksInfo(queryParams.tag) : await this.get("dataService").getBooksInfo();
                     books = queryParams ? await this.get("dataService").getBooksInfo(queryParams.search, queryParams.tag) : await this.get("dataService").getBooksInfo();
                    resolve(books);
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
