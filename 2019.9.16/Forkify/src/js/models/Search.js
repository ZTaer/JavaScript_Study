import axios from 'axios';

/** 获取搜索结果
 * 
 */
export default class Search {
    constructor( searchContact ){
        this.searchContact = searchContact;
    }

    async getSearchResult( searchContact = this.searchContact ){
        const apiPassword = '0360de105ebd1b22a33b1de1ee0e2f46';
        const cors = 'https://cors-anywhere.herokuapp.com/';
        try{
            const recipe = await axios(`${cors}https://www.food2fork.com/api/search?key=${apiPassword}&q=${searchContact}`);
            this.result = recipe.data.recipes;

        }catch(error){
            console.log(error);
        }
    }
}
