export default class Likes {
    constructor(){
        this.Likes = [];
    }

    addLikeItem( id, title, auother, img ){
        const item = {
            id,
            title,
            auother,
            img,
        }
        this.Likes.push( item );
    }

    delLikeItem( id ){
        // 在保存对象的数组中快速查找所需元素方法( 等待笔记 )
        //      0. findIndex() 与 splice() 配合
        //          a) findIndex()找出索引值
        //              0. findIndex() 找到目标返回索引值, 否则返回-1
        //          b) splice()处理数组
        const tar = this.Likes.findIndex( cur => cur.id == id );
        if( tar >= 0 ) this.Likes.splice( tar, 1 );
        
    }

    // 判断是否已经存在于喜欢列表中
    isLiked( id ){
        return this.Likes.findIndex( cur => cur.id === id ) >= 0 ? true : false; 
    }

    // 获取喜欢列表中的数量
    getLikesNum(){
        return this.Likes.length;
    }


}