type TypeStringNumber = string | number;

/**
 * Ts中class继承( 完成笔记 )
 */
// a) class构建，class复制，class继承
// b) class中构建变量函数的方法
    // 0. private
    // 1. public
    // 2. readonly
    // 3. protected
    // 4. static
// d) class中get/set函数构建及使用


class TestClass {
    pro: TypeStringNumber;
    private testPrivate: ( TypeStringNumber )[] = [];                       // class: private创建内部变量，只能class内部本身能使用，复制/继承后的class无法访问数据( 完成笔记 )
    public testPublic = ' 公开数据 ';                                        // class: public创建公开变量, 外界可以访问且修改( 完成笔记 )
    public readonly testReadonly = ' 只读数据,不可修改 ';                     // class: readonly只读变量，不可修改( 完成笔记 )
    protected testProtected: ( TypeStringNumber )[] = [' 可继承的私密数据 ']; // class: protected受保护数据，可继承使用，且只能class内部本身能使用( 完成笔记 )

    static testStaticLet: TypeStringNumber = '静态变量';                     // class: static构建静态变量/函数，class无需实列化即可访问使用( 完成笔记 )
    static testStaticFunction () {
        console.log('static函数');
    };

    constructor( testProps: TypeStringNumber, public id: number ){          // class: constructor便捷式创建this变量: constructor( public xx, private yy )创建的变量，可直接this.xx访问变量( 完成笔记 )
        this.pro = testProps;
    }

    get testGet(){                                                          // class: get函数必须要返回数据，可以返回私密变量数据
        if( this.testPrivate ){
            return this.testPrivate;
        }
        throw console.error('没有发现变量');
    }
    set testSet( props: TypeStringNumber ){                                 // class: set函数，传入数据进行加工
        if( !props ){
            throw new Error('请传入正常的数据');
        }
        this.addTest( props );
    }

    showTest(){
        console.log(
            this.pro,
            this.testPrivate,
            this.testPublic,
            this.id,
            TestClass.testStaticLet                                         // class( 注意 ): static静态变量函数，内部访问，与外部访问方法一样。
        );
    }

    addTest( addData: TypeStringNumber ){
        this.testPrivate.push( addData );
    }
};

TestClass.testStaticFunction()                      // 无需实列化即可访问class中的static函数/变量( 完成笔记 )

const atest = new TestClass( '传入的数据',10000 );
atest.addTest('传入数据测试_1');
atest.addTest('传入数据测试_2');
atest.showTest();
atest.testSet = '使用set新传入的数据';                // 使用class中的set函数( 完成笔记 )
console.log(
    '显示GET获取的数据:',   
    atest.testGet,                                   // 访问class中get函数( 完成笔记 )
);


/* 复制class( 完成笔记 ) */
const atestCopy = { 
    pro: '复制class后传入的数据', 
    testPublic: atest.testPublic,
    calcTest: atest.showTest,
};
atestCopy.calcTest();

/* 继承class */
class TestExtends extends TestClass{
    constructor( testProps: TypeStringNumber, public id: number ){
        super( testProps, id );
    }
}

const btest = new TestExtends( '继承测试',20000 );
console.log( btest );

/* abstract抽象类 */
// 只能继承，无法实列化的类，React方向感觉800年用不到
abstract class xxx{ }
