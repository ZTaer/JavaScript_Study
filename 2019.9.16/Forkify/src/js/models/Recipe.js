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

    processIngredients(){
        let result = this.ingredients;
        console.log(result);

        // 0. 替换统一词汇
            // a) 单词解析
                // tablespoon - 汤匙
                // ounce - 盎司
                // teaspoon - 茶匙
                // cups - 杯
                // pound - 镑
        const unitsL = [ 'tablespoon','tablespoons', 'ounce','ounces', 'teaspoon','teaspoons', 'cups', 'pounds' ];
        const unitsS = [ 'tbsp','tbsp', 'oz','oz', 'tsp','tsp', 'cup', 'pound' ];
        result = result.map( cur => {

            // 0. 替换统一词汇
            unitsL.forEach( ( unit, index ) => {
                cur = cur.replace( unit, unitsS[index] );
            } );

            // window.r = result; 加入到全局( 根据视频中的记录 - 等待笔记 )

            // 1. 删除括号内容用空格代替( 正则表达式 - 等待研究 )
            cur = cur.replace(/ *\([^)]*\) */g, ' ' );

            // 2. 处理句式，提取单位
                // a) 有词汇,有参数
                    // 0. 如: 1 cups; 1 1/4 cups( 1+1/4进行处理 );
                // b) 没有词汇,有参数
                    // 0. 如: 1 xxxx;
                // c) 无参数,无词汇
            cur = cur.split(' ');
            let door = cur.findIndex( el => unitsS.includes( el ) );
            console.log(`door = ${door}`);

            return cur;
        } );
        
        this.ingredients = result;

    }

 }