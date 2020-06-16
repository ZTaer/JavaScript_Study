
console.log( '---Start---' );
/* 装饰器：实战表单数据验证( 完成笔记 ) */
// 验证思路:
    // 0. 构建数据结构：当前数据正常为{ Carouse:{ title: "required", price: "positive" } }
    // 1. 装饰器: 验证变量数值是否正常，若正常则将‘reduired’/'positive'根据数据结构加入变量中
    // 2. 数据验证：
        // a) 根据‘reduired’/'positive'促发不同的验证方法
        // b) 如果数据不存在，则提升错误
        // c) 如果数据，其中一个不存在，则提示错误
        // d) 如果数字小于0，则提示错误

interface ValidateConfig{
    [propertyName: string]: { [validateProp: string]: string }
}
const pushValidate: ValidateConfig = {};

function RequiredTitle( target:any, name: string ){
    pushValidate[ target.constructor.name ] = { 
        ...pushValidate[ target.constructor.name ],
        [name]: 'required' 
    }
}

function RequiredNumber( target:any, name: string ){
    pushValidate[ target.constructor.name ] = { 
        ...pushValidate[ target.constructor.name ],
        [name]: 'positive'
    }
}

function validate( objDate: object ){
    if( !objDate ){
        return true;
    }
    let result: boolean = true;
    console.log( pushValidate );
    for( let props in pushValidate ){
        for( let item in pushValidate[props] ){
            switch(pushValidate[props][item]){
                case 'required':
                    result = result && !!objDate[item]
                    break;
                case 'positive':
                    result = result && objDate[item] > 0
                    break;
            }
        }
    }
    console.log( result );
    return result;
}

class Course {
    @RequiredTitle title: string;
    @RequiredNumber price: number;
    constructor( title: string , price: number ){
        this.title = title;
        this.price = price;
    }
}

const currentFrom = document.getElementById("input-from")!;
currentFrom.addEventListener('submit',event=>{
    event?.preventDefault();
    const titleDoc = document.getElementById("title") as HTMLInputElement ;
    const priceDoc = document.getElementById("price") as HTMLInputElement ;
    const title: string = titleDoc.value.toString();
    const price: number = +priceDoc.value;

    const createCourse = new Course( title, price );
    console.log( createCourse );
    console.log( pushValidate );
    if( !validate( createCourse ) ){
        alert(" 输出错误!!! ");
    }
});