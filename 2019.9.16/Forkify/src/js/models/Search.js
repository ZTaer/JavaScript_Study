import axios from 'axios';
import { apiPassword,cors } from '../config';

/** 获取搜索结果
 * 
 */
export default class Search {
    constructor( searchContact ){
        this.searchContact = searchContact;
    }

    async getSearchResult( searchContact = this.searchContact ){
        this.searchContact = searchContact;
        try{
            const recipe = await axios(`${cors}https://forkify-api.herokuapp.com/api/search?q=${searchContact}`);
            this.result = recipe.data.recipes;

        }catch(error){
            console.log(error);
        }
    }
}
