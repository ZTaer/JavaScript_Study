import axios from 'axios';
import { apiPassword, cors } from '../config';

/**
 *  获取指定ID产品数据
 */

 export default class Recipe{
     constructor(id){
        this.id = id;
     }

    async getIdRecipe( id = this.id ){
        this.id = id;
        try{
            const res = await axios(`${cors}https://www.food2fork.com/api/get?key=${apiPassword}&rId=${id}`);
            const index = res.data.recipe;
            
            this.title = index.title;
            this.publisher = index.publisher;
            this.img = index.image_url;
            this.source = index.source_url;
            this.ingredients = index.ingredients;
            
        }catch( error ){
            console.log(error);
        }
    }     

    calcCookTime(){
        this.cookTime = Math.ceil( this.ingredients.length / 3 ) * 15; 
    }

    calcServings( num = 4 ){
        this.servings = num;
    }

 }