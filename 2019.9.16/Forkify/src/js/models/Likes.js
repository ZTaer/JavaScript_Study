export default class Likes {
    constructor(){
        this.Likes = [];
    }

    addLikeItem( id, title, publisher, img ){
        const item = {
            id,
            title,
            publisher,
            img,
        }
        this.Likes.push( item );

        this.saveLocalLikes();
    }

    delLikeItem( id ){
        // 在保存对象的数组中快速查找所需元素方法( 完成笔记 )
        //      0. findIndex() 与 splice() 配合
        //          a) findIndex()找出索引值
        //              0. findIndex() 找到目标返回索引值, 否则返回-1
        //          b) splice()处理数组
        const tar = this.Likes.findIndex( cur => cur.id == id );
        if( tar >= 0 ) this.Likes.splice( tar, 1 );
        
        this.saveLocalLikes();
    }

    // 判断是否已经存在于喜欢列表中
    isLiked( id ){
        return this.Likes.findIndex( cur => cur.id === id ) >= 0 ? true : false; 
    }

    // 获取喜欢列表中的数量
    getLikesNum(){
        return this.Likes.length;
    }

    /**
     *  目的: 喜欢列表中的记录保存在本地
     */

    // 0. 获取本地喜欢列表，有则加入现有列表
    getLocalLikes(){
        if ( localStorage.getItem( 'likes' ) ){
            let localDate = JSON.parse( localStorage.getItem( 'likes' ) );
            this.Likes = localDate;
        }
    }


    // 1. 喜欢列表的每一次改变，与本地存储同步     
    saveLocalLikes(){
        localStorage.setItem( 'likes',JSON.stringify( this.Likes ) );
    }


}