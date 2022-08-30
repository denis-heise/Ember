import Service from '@ember/service';

export default Service.extend({
    getBooksInfo(search, tag){
        let queryParams = '';
        if(search){
            queryParams = `?q=${search}`
        } 
        if(tag){
            queryParams = `?tags_like=${tag}`
        } 
        if(search && tag){
            queryParams = `?q=${search}&tags_like=${tag}`
        }
        return fetch(`http://localhost:3000/books/${queryParams}`).then((response) => response.json());
    },
    getSpeakersInfo(name){
        let queryParams = '';
        if(name){
            queryParams = `?full_name_like=${name}`
        }
        return fetch(`http://localhost:3000/speakers${queryParams}`).then((response) => response.json());
    }
});
