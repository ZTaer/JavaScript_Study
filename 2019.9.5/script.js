
/********* 要求分析 */
// 公园:
    // 名称,建造年份,面积大小,树的数量
    // 计算绿化面积方法 - 树的数量/面积 = 绿化密度

// 街道:
    // 名称,建造年份,长度,大小
    // 判断街道大小的方法
        // 如: 大小: [1,2,3,4,5] = ['超小','小','中','大','超大' ]

// 输出要求:
    // 公园:
        // 0. 输出所有公园的绿化密度
        // 1. 公园平均年龄
        // 2. 超过1000棵树的公园名称
    // 街道:
        // 0. 所有街道的总长度以及平均长度
        // 1. 判断显示街道大小的级别: 
            // 如: 菜鸟街为大型街道

/********* 功能模块 */
// example
class Example{

    constructor( name, broYear ){
        this.name = name;
        this.broYear = broYear;
    }

}

// park

class Park extends Example{

    constructor( name, broYear, area, treeNum ){
        super( name,broYear );
        this.area = area;
        this.treeNum = treeNum;
    }

    calcTree(){
        const result = this.treeNum/this.area;
        console.log( ` ${ this.name }绿化密度为${result}每平方千米. ` );
    }
    
}

// street
class Street extends Example{


    constructor( name, broYear, len, size ){
        super(name, broYear);
        this.len = len;
        this.size = size;
    }

    ifSize(){
        const sizeMap = new Map();
        sizeMap.set(1, '超小');
        sizeMap.set(2, '小');
        sizeMap.set(3, '中');
        sizeMap.set(4, '大');
        sizeMap.set(5, '超大');
                
        console.log( ` ${ this.name }为${sizeMap.get( this.size )}型街道 ` );
    }

}

/********* 主控程序 */
let park = [ new Park( '菜鸟公园', 1998, 12, 3000 ), new Park( '林肯公园', 1888, 30, 5000 ) ];
let street = [ new Street( '菜鸟大道', 1995, 7, 3 ), new Street( '亡者魂街', 3000, 12, 1 ) ];


// 公园:
    console.log(`----- 公园数据统计 -----`);
    console.log(` 一共有${ park.length }个公园 `);
    // 0. 输出所有公园的绿化密度
    park.forEach( cur => cur.calcTree() );

    // 1. 公园平均年龄
    let parkAvgYear = park.map( cur => new Date().getFullYear() - cur.broYear  ).reduce( ( total, cur, index ) => total + cur,0 )/park.length;
    console.log(` 公园平均年龄为: ${parkAvgYear} `);
    
    // 2. 超过1000棵树的公园名称
    let winPark = park.map( cur => cur.treeNum ).forEach( ( cur, index ) => {
        if( cur >= 1000 ){
            console.log( ` ${ park[ index ].name }超出1000棵树,其树木数量为${ park[index].treeNum }棵 ` );
        }
    } );


// 街道:
    console.log(`----- 街道数据统计 -----`);
    // 0. 所有街道的总长度以及平均长度
    let streetSumLen = street.map( cur => cur.len ).reduce( ( total, index ) => total + index );
    let streetAvgLen = streetSumLen/street.length;
    console.log(` 所有街道的总长度为${streetSumLen},平均长度为${streetAvgLen} `);

    // 1. 判断显示街道大小的级别: 
        // 如: 菜鸟街为大型街道// 公园
    street.forEach( cur => cur.ifSize() )



