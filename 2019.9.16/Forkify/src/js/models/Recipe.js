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

    calcServings( num = 1 ){
        this.servings = num;
    }

    processIngredients(){
        let result = this.ingredients;

        // 0. 替换统一词汇
            // a) 单词解析
                // tablespoon - 汤匙
                // ounce - 盎司
                // teaspoon - 茶匙
                // cups - 杯
                // pound - 镑
        const unitsL = [ 'tablespoons', 'tablespoon', 'ounces', 'ounce',  'teaspoons', 'teaspoon', 'cups', 'pounds' ];
        const unitsS = [ 'tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound' ];
        const units = [...unitsS, 'kg', 'g' ];
        result = result.map( cur => {

            // 0. 替换统一词汇
            unitsL.forEach( ( unit, index ) => {
                cur = cur.replace( unit, units[index] );
            } );

            // window.r = result; 加入到全局( 根据视频中的记录 - 完成笔记 )

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
            let num,unit,ingredients;
            if( door > -1 ){
                // a) 有词汇,有参数
                num = cur.slice( 0, door ).join('+');
                num = num.replace('-','+');
                // eval()函数,字符串js执行语句( 完成笔记 )
                    // 0. 如: eval( " a = () => { console.log('233') }; a(); " ) 成立;
                    // 1. 不过通常用来字符串计算使用
                        // a) 如: eval( "1+1" );
                num = eval( num ); 
                unit = cur[ door ];
                ingredients = cur.slice( door+1 ).join(' ');
            }
            else if( parseInt( cur[0], 10 ) ){
                // b) 没有词汇,有参数
                num = parseFloat( cur[0] );
                unit = '';
                ingredients = cur.slice( 1 ).join(' ');
            }
            else if( door === -1 ){
                // c) 无参数,无词汇
                num = 1
                unit = '';
                ingredients = cur.join(' ');
            }

            cur = {
                // 对象属性便捷式写法( 完成笔记 )
                    // 0. num, 相当于 num = num,
                num,
                unit,
                ingredients,
            }

            return cur;
        } );
        
        this.ingredients = result;

    }

    // 调整材料份量
    reviseServings( type ){
        const newIng = this.ingredients;
        if( type === 'inc' ){
            this.servings++;
            newIng.forEach( ( cur, index ) => {
                this.ingredients[index].num = cur.num * 2;
            } );
        }
        else if ( type === 'dec' && this.servings > 1 ){
            this.servings--;
            newIng.forEach( ( cur, index ) => {
                this.ingredients[index].num = cur.num * 0.5;
            } );
        }
        console.log( this.ingredients );
    }    



 }