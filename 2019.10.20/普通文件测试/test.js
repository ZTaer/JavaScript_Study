

function bbc(){
    console.log( 'bbc' );
}

class abc{

    constructor(){
        this.name = 'test';
    }

    show(){
        console.log( this.name );
    }

}

class test{
    constructor(){
        this.state = {};
        this.name = 'test1';
    }

    testThis(){
        console.log( this );
    }

    test2This = () => {
        this.testThis();
        console.log(this);
    }
}
const tt = new test;
tt.test2This();

